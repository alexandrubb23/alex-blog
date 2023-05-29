import { access, constants } from 'fs/promises';

import { NotFoundError } from '@/app/api/lib/classes/Errors';

const checkEntityExist = async (markdownFile: string) => {
  try {
    await access(markdownFile, constants.R_OK);
  } catch {
    throw new NotFoundError('Invalid url.');
  }
};

export default checkEntityExist;
