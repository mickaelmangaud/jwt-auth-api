import { Router } from 'express';
import { AuthController } from '../controllers';
import { sendResponse } from '../utils';
import { StatusCodes } from 'http-status-codes';

const router = new Router();

router.post('/login', (req, res, next) => {
  // validate payload
  if (!req.body.email || !req.body.password) {
    // retourner InvalidPayloadError
  }
  
  AuthController.login(req.body)
    .then(payload => sendResponse(res, StatusCodes.OK, payload))
    .catch(next);
})

export default router;