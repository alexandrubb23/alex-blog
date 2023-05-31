import { access, constants, readFile } from 'fs/promises';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import categories from '@/app/api/data/categories';
import {
  InternalServerError,
  NotFoundError,
} from '@/app/api/lib/classes/Errors';
import { APIResponse, PostData, QueryParams } from '@/app/api/lib/models';
import { sortData } from '@/app/api/lib/utils';
import EntityDataRepositoryInterface from './EntityDataRepositoryInterface';

const ROOT_DIR = 'api';

class EntityFileSystemRepository implements EntityDataRepositoryInterface {
  private entityDirectory: string;

  constructor(private dirName: string) {
    this.dirName = dirName;
    this.entityDirectory = this.getAbsoluteEntityDirectory();
  }

  getAll = () => {
    const topics = this.readDirectory(this.entityDirectory);

    const entityData = topics.reduce<APIResponse[]>((entities, topic) => {
      const category = this.findTopicCategory(topic);
      if (!category) return entities;

      const { id, icon, name } = category;

      const entity: APIResponse = {
        id,
        icon,
        name,
        data: this.getPostsByTopicName(topic),
      };

      entities.push(entity);

      return entities;
    }, []);

    return entityData.sort(sortData.sort);
  };

  findOne = async ({ id, topic }: QueryParams) => {
    const markdownFile = path.join(this.entityDirectory, topic, `${id}.md`);

    await this.checkMarkdownFileExist(markdownFile);

    const markdownFileContents = await this.readMarkdownFile(markdownFile);
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
    if (!isDirectory) throw new NotFoundError();

    return entityDirectory;
  };

  private findTopicCategory = (topic: string) => {
    return categories.find(c => c.id.toLowerCase() === topic);
  };

  private checkMarkdownFileExist = async (markdownFile: string) => {
    try {
      await access(markdownFile, constants.R_OK);
    } catch {
      throw new NotFoundError();
    }
  };

  private readDirectory(directory: string): string[] {
    return fs.readdirSync(directory);
  }

  private readMarkdownFile = async (markdownFile: string) => {
    try {
      return await readFile(markdownFile, { encoding: 'utf-8' });
    } catch (error) {
      // TODO: Log error
      console.error(error);
      throw new InternalServerError();
    }
  };
}

export default EntityFileSystemRepository;
