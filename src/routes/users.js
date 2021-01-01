import { Router } from 'express';
import { UsersController } from '../controllers';
import { sendResponse } from '../utils';
import { StatusCodes } from 'http-status-codes';

const router = new Router();

router.put('/register', async (req, res, next) => {
  // TODO: validate payload
  UsersController.register(req, res, next)
    .then(payload => sendResponse(res, StatusCodes.CREATED, payload))
    .catch(next)
});

export default router;