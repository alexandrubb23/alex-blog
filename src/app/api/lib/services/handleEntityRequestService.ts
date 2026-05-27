import { NextResponse } from "next/server";

import { HttpError } from "@/app/api/lib/classes/Errors";

export const nextResponse = (status: number, statusText: string) => {
  return NextResponse.json(
    {
      error: statusText,
    },
    {
      status,
    },
  );
};

export const handleRequestAndRespond = async <T>(handler: () => Promise<T>) => {
  try {
    const data = await handler();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof HttpError) {
      return nextResponse(error.statusCode, error.message);
    }

    console.error("Unexpected error:", error);
    return nextResponse(500, "Internal server error");
  }
};

const handleEntityRequestService = async <T>(getData: () => Promise<T>) =>
  handleRequestAndRespond(getData);

export default handleEntityRequestService;
