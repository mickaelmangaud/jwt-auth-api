import { BaseError } from "./baseError";
import { StatusCodes } from "http-status-codes";

export class NotFoundError extends BaseError {
  constructor(message, detailedMessages = [], code = "Not Found") {
    super(message, detailedMessages, code, StatusCodes.NOT_FOUND);
  }
}
