import { BaseError } from "./baseError";
import { StatusCodes } from "http-status-codes";

export class ConflictError extends BaseError {
  constructor(message, code = "Already Exists") {
    super(message, code, StatusCodes.CONFLICT);
  }
}
