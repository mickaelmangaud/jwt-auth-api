export class BaseError extends Error {
	constructor(message, detailedMessages, code, status) {
		super();
		this.message = message;
		this.code = code;
		this.status = status;
		this.detailedMessages = detailedMessages;

		Error.captureStackTrace(this, this.constructor);
	}
}
