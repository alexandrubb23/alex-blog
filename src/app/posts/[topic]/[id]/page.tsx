'use client';

import { ENTITIES } from '@/app/api/lib/constants';
import { PageLayout } from '@/components/common';
import { PageProps } from '@/models';

const Post = ({ params }: PageProps) => (
  <PageLayout value={{ entity: ENTITIES.POSTS, params }} />
);

export default Post;
