export class BaseError extends Error {
	constructor(message, detailedMessages, code, status) {
		super();
		this.message = message;
		this.detailedMessages = detailedMessages;
		this.code = code;
		this.status = status;

		Error.captureStackTrace(this, this.constructor);
	}
}
