import { StatusCodes } from "http-status-codes";

const errorHandler = (error, req, res, next) => {
  if (!res.headersSent && error) {
    res.contentType("application/problem+json");

    if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
      error.status = StatusCodes.UNAUTHORIZED;
    }

    error = {
      status: error.status,
      code: error.code,
      message: error.message,
      detailedMessages: error.detailedMessages,
    };

    res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export default errorHandler;
