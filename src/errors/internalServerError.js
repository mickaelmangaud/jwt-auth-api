import { BaseError } from "./baseError";
import { StatusCodes } from "http-status-codes";

export class InternalServerError extends BaseError {
  constructor(message, code = "InternalServerError") {
    super(message, code, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
