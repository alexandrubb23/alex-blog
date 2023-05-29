import { APIResponse, PostData } from '@/app/api/lib/models';
import date from './date';

const comparePosts = (a: PostData, b: PostData) =>
  date.getTime(b.date) - date.getTime(a.date);

export const sort = (a: APIResponse, b: APIResponse) => {
  const postA = a.data.sort(comparePosts)[0];
  const postB = b.data.sort(comparePosts)[0];

  return date.getTime(postB.date) - date.getTime(postA.date);
};

const sortData = {
  sort,
};

export default sortData;