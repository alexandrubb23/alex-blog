import { QueryClient } from '@tanstack/react-query';
import { singular } from 'pluralize';

import { Entity } from '@/app/api/lib/models';
import { getAllPosts } from '@/app/api/lib/sql';
import getOnePost from '@/app/api/lib/sql/getOnePost';
import { getStaleTime } from '@/utils/api';
import getAndParseResponse from '@/utils/getAndParseResponse';

interface PrefetchEntityProps {
  entity: Entity;
  id: string;
  prefetchRelated?: boolean;
}

const prefetchEntity = async ({ 
  entity, 
  id, 
  prefetchRelated = true 
}: PrefetchEntityProps) => {
  const queryClient = new QueryClient();

  // Prefetch the main post
  await queryClient.prefetchQuery({
    queryKey: [singular(entity), id],
    queryFn: async () => {
      const response = await getOnePost(entity, id);
      if (!response) return null;

      const parsedResponse = await getAndParseResponse(entity, id);
      return parsedResponse;
    },
    staleTime: getStaleTime(),
  });

  // Optionally prefetch related posts
  if (prefetchRelated) {
    try {
      const mainPost = await getOnePost(entity, id);
      if (mainPost?.topic) {
        await queryClient.prefetchQuery({
          queryKey: [entity, { topic: mainPost.topic, excludePost: id, limit: 5 }],
          queryFn: () => getAllPosts({ 
            entity, 
            queryFilter: { 
              topic: mainPost.topic, 
              excludePost: id, 
              limit: 5 
            } 
          }),
          staleTime: getStaleTime(),
        });
      }
    } catch (error) {
      // Silently fail for related posts - they're not critical
      console.warn('Failed to prefetch related posts:', error);
    }
  }

  return queryClient;
};

export default prefetchEntity;
