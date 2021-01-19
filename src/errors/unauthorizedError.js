import { BaseError } from "./baseError";
import { StatusCodes } from "http-status-codes";

export class UnauthorizedError extends BaseError {
  constructor(message, code = "Unauthorized") {
    super(message, code, StatusCodes.UNAUTHORIZED);
  }
}
