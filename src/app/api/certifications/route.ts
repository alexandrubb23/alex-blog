import { NextResponse } from 'next/server';

import { certificationsService } from '@/app/api/lib/services';

export async function GET() {
  const certifications = certificationsService.getAll();

  return NextResponse.json(certifications);
}
