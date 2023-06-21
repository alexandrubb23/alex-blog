import { NextResponse } from 'next/server';

import { HTTPStatusError } from '@/app/api/lib/classes/Errors';
import { APIResponse, PostData } from '@/app/api/lib/models';

const handleEntityRequestService = async (
  getData: () => Promise<APIResponse[]> | Promise<PostData>
) => {
  try {
    const data = await getData();

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof HTTPStatusError) {
      return new NextResponse(null, {
        status: error.statusCode,
        statusText: error.message,
      });
    }
  }
};

export default handleEntityRequestService;
