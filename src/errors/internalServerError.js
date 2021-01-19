import { BaseError } from "./baseError";
import { StatusCodes } from "http-status-codes";

export class InternalServerError extends BaseError {
  constructor(message, detailedMessages = [], code = "InternalServerError") {
    super(message, detailedMessages, code, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
