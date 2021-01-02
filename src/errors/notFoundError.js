import { BaseError } from "./BaseError";
import { StatusCodes } from "http-status-codes";

export class NotFoundError extends BaseError {
    constructor(message, code = "Not Found") {
        super(message, code, StatusCodes.NOT_FOUND);
    }
}
