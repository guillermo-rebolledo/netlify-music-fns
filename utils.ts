import { ResponseCodes, headers } from "./constants";

export function sendResponse(
  code: ResponseCodes,
  body: Record<string, unknown>
) {
  return {
    statusCode: code,
    headers,
    body: JSON.stringify(body),
  };
}
