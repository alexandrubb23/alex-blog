import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  req.headers.set('Access-Control-Allow-Origin', '*');
}
