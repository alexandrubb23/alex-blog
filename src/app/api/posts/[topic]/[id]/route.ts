import { NextResponse } from 'next/server';

import { CustomError } from '@/app/api/lib/classes/Errors';
import { postsService } from '@/app/api/lib/services';
import { QueryParams } from '@/hooks/router/useEntitySlug';

export async function GET(
  request: Request,
  { params }: { params: QueryParams }
) {
  try {
    const post = await postsService.findOne(params);

    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(null, {
        status: error.statusCode,
        statusText: error.message,
      });
    }
  }
}
