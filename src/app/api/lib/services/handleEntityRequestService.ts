import { NextResponse } from 'next/server';

import { HTTPStatusError } from '@/app/api/lib/classes/Errors';
import { APIResponse } from '@/app/api/lib/models';
import type { PostDataOrUndefined } from '../models/post-data.interface';

const nextResponse = (status: number, statusText: string) => {
  return new NextResponse(null, {
    status,
    statusText,
  });
};

const handleEntityRequestService = async (
  getData: () => Promise<APIResponse[]> | Promise<PostDataOrUndefined>
) => {
  try {
    const data = await getData();
    if (!data) return nextResponse(404, 'Not Found');

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof HTTPStatusError)
      return nextResponse(error.statusCode, error.message);

    return nextResponse(500, 'Internal Server Error');
  }
};

export default handleEntityRequestService;
