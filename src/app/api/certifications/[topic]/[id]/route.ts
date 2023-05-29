import { NextResponse } from 'next/server';

import { CustomError } from '@/app/api/lib/classes/Errors';
import { certificationsService } from '@/app/api/lib/services';
import { QueryParams } from '@/hooks/router/useEntitySlug';

export async function GET(
  request: Request,
  { params }: { params: QueryParams }
) {
  try {
    const certificate = await certificationsService.findOne(params);

    return NextResponse.json(certificate);
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(null, {
        status: error.statusCode,
        statusText: error.message,
      });
    }
  }
}
