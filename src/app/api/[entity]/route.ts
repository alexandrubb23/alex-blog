import { postsService } from '@/app/api/lib/services';
import { NextResponse } from 'next/server';
import createEntityService from '../lib/services/createEntityService';

type Entity = 'posts' | 'certifications';

export async function GET(
  request: Request,
  { params }: { params: { entity: Entity } }
) {
  const entity = createEntityService(params.entity);

  const result = entity.getAll();

  return NextResponse.json(result);
}
