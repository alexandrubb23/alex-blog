import { z } from "zod";

import { HttpError } from "../classes/Errors";

const badRequestError = (message: string) => new HttpError(message, 400);

export const validateRequest = <T extends z.ZodSchema>(
  schema: T,
  data: unknown,
) => {
  if (!data) throw badRequestError("Request data is required");

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    throw badRequestError(z.treeifyError(parsed.error) as unknown as string);
  }

  return parsed.data;
};
