import { readFile } from 'fs/promises';

import { InternalServerError } from '@/app/api/lib/classes/Errors';

const readMarkdownFile = async (markdownFile: string) => {
  try {
    return await readFile(markdownFile, { encoding: 'utf-8' });
  } catch (error) {
    throw new InternalServerError('An error occured.');
  }
};

export default readMarkdownFile;
