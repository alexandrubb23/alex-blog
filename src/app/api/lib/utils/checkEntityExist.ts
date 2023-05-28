import { access, constants } from 'fs/promises';

import { NotFoundError } from '@/app/api/lib/classes/Errors';

const checkEntityExist = async (entityType: string, markdownFile: string) => {
  try {
    await access(markdownFile, constants.R_OK);
  } catch {
    throw new NotFoundError(`${entityType} with the given id not found.`);
  }
};

export default checkEntityExist;
