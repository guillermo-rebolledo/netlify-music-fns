export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

export enum ResponseCodes {
  NotFound = 404,
  Error = 500,
  Ok = 200,
  BadRequest = 400,
}
