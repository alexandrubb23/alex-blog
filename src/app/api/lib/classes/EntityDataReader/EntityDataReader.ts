import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import categories from '@/app/api/data/categories';
import { APIResponse } from '@/app/api/lib/models';
import { sortData } from '@/app/api/lib/utils';
import { FetchResponse } from '@/services';

class EntityDataReader {
  private entityDirectory: string;

  constructor(private dirName: string) {
    this.dirName;
    this.entityDirectory = this.getAbsoluteEntityDirectory();
  }

  private getAbsoluteEntityDirectory = () => {
    return path.join(process.cwd(), this.dirName);
  };

  read = () => {
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

  data = (fullTopicPath: string) => {
    const topicDir = fs.readdirSync(fullTopicPath);
    return topicDir.reduce<FetchResponse[]>((items, file) => {
      const id = file.replace(/\.md$/, '');
      const fullFilePath = `${fullTopicPath}/${file}`;

      const fileContents = fs.readFileSync(fullFilePath, 'utf8');
      const matterResult = matter(fileContents);

      const item = {
        id,
        content: matterResult.content,
        ...matterResult.data,
      } as FetchResponse;

      items.push(item);

      return items;
    }, []);
  };
}

export default EntityDataReader;
