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
    this.dirName;
    this.entityDirectory = this.getAbsoluteEntityDirectory();
  }

  readAll = () => {
    const topics = fs.readdirSync(this.entityDirectory);

    const entityData = topics.reduce<APIResponse[]>((items, topic) => {
      const category = categories.find(c => c.id.toLowerCase() === topic);
      if (!category) return items;

      const fullTopicPath = path.join(this.entityDirectory, topic);

      const item: APIResponse = {
        id: category.id,
        icon: category.icon,
        name: category.name,
        data: this.data(fullTopicPath),
      };

      items.push(item);

      return items;
    }, []);

    return entityData.sort(sortData.sort);
  };

  readOne = async ({ id, topic }: QueryParams) => {
    const markdownFile = path.join(
      this.entityDirectory,
      topic as string,
      `${id}.md`
    );

    await checkEntityExist(markdownFile);

    const markdownFileContents = await readMarkdownFile(markdownFile);
    const matterResult = matter(markdownFileContents);

    return {
      id,
      content: matterResult.content,
      ...matterResult.data,
    } as PostData;
  };

  private data = (fullTopicPath: string) => {
    const topicDir = fs.readdirSync(fullTopicPath);
    return topicDir.reduce<PostData[]>((items, file) => {
      const id = file.replace(/\.md$/, '');
      const fullFilePath = `${fullTopicPath}/${file}`;

      const fileContents = fs.readFileSync(fullFilePath, 'utf8');
      const matterResult = matter(fileContents);

      const item = {
        id,
        content: matterResult.content,
        ...matterResult.data,
      } as PostData;

      items.push(item);

      return items;
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
}

export default EntityDataReader;
