import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import categories from '@/app/api/data/categories';
import { NotFoundError } from '@/app/api/lib/classes/Errors';
import { APIResponse, PostData, QueryParams } from '@/app/api/lib/models';
import {
  checkEntityExist,
  readMarkdownFile,
  sortData,
} from '@/app/api/lib/utils';

const ROOT_DIR = 'api';
class EntityDataReader {
  private entityDirectory: string;

  constructor(private dirName: string) {
    this.entityDirectory = this.getAbsoluteEntityDirectory();
  }

  readAll = () => {
    const topics = fs.readdirSync(this.entityDirectory);

    const entityData = topics.reduce<APIResponse[]>((technologies, topic) => {
      const category = this.findTopicCategory(topic);
      if (!category) return technologies;

      const { id, icon, name } = category;

      const technology: APIResponse = {
        id,
        icon,
        name,
        data: this.getPostsByTopicName(topic),
      };

      technologies.push(technology);

      return technologies;
    }, []);

    return entityData.sort(sortData.sort);
  };

  readOne = async ({ id, topic }: QueryParams) => {
    const markdownFile = path.join(this.entityDirectory, topic, `${id}.md`);

    await checkEntityExist(markdownFile);

    const markdownFileContents = await readMarkdownFile(markdownFile);
    const matterResult = matter(markdownFileContents);

    return {
      id,
      content: matterResult.content,
      ...matterResult.data,
    } as PostData;
  };

  private getPostsByTopicName = (topic: string) => {
    const fullTopicPath = path.join(this.entityDirectory, topic);
    const topicPosts = fs.readdirSync(fullTopicPath);

    return topicPosts.reduce<PostData[]>((posts, file) => {
      const id = file.replace(/\.md$/, '');
      const fullFilePath = `${fullTopicPath}/${file}`;

      const fileContents = fs.readFileSync(fullFilePath, 'utf8');
      const matterResult = matter(fileContents);

      const post = {
        id,
        content: matterResult.content,
        ...matterResult.data,
      } as PostData;

      posts.push(post);

      return posts;
    }, []);
  };

  private getAbsoluteEntityDirectory = () => {
    const entityDirectory = path.join(
      process.cwd(),
      `${ROOT_DIR}/${this.dirName}`
    );

    const isDirectory = fs.existsSync(entityDirectory);
    if (!isDirectory) throw new NotFoundError('Entity not found');

    return entityDirectory;
  };

  private findTopicCategory = (topic: string) => {
    return categories.find(c => c.id.toLowerCase() === topic);
  };
}

export default EntityDataReader;
