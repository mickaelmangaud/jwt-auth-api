import { Router } from "express";
import { AuthController } from "../controllers";
import { sendResponse } from "../utils";
import { StatusCodes } from "http-status-codes";
import { InvalidPayloadError } from "../errors";
import { cookiesOptions } from "../config";
import loginSchema from "../validation/login.schema.json";
import Ajv from "ajv";

const router = new Router();
const ajv = new Ajv({ allErrors: true });
const validateLogin = ajv.compile(loginSchema);

router.post("/login", (req, res, next) => {
  if (!validateLogin(req.body)) {
    return next(new InvalidPayloadError("Invalid email or password", validateLogin.errors));
  }

  AuthController.login(req.body)
    .then((payload) => sendResponse(res, StatusCodes.OK, payload))
    .catch(next);
});

export default router;
