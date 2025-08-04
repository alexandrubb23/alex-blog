import type { NextRequest } from "next/server";

import { RequestQueryParams } from "@/app/api/lib/models";
import { handleEntityRequestService } from "@/app/api/lib/services";
import getAndParseResponse from "@/utils/getAndParseResponse";

export const GET = async (_: NextRequest, { params }: RequestQueryParams) => {
  const { entity, id } = await params;

  const fetchFn = () => getAndParseResponse(entity, id);
  return handleEntityRequestService(fetchFn);
};
