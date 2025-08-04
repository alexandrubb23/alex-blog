import { z } from "zod";

import { NextRequest } from "next/server";
import { validateRequest } from "./validate-request";

export const parseQuery = <T extends z.ZodSchema>(
  schema: T,
  req: NextRequest,
) => {
  const entries = req.nextUrl.searchParams.entries();
  const queryParams = Object.fromEntries(entries);

  return validateRequest(schema, queryParams);
};
