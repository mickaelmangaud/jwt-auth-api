import { Router } from 'express';
import { UsersDAO } from '../dao';
import jwt from 'jsonwebtoken';

const router = new Router();

router.put('/register', async (req, res, next) => {
  // TODO: validate payload
  const foundUser = await UsersDAO.findByEmail(req.body.email);
  if (foundUser) {
    next(new Error('UTILISATEUR DEJA EXISTANT'));
  }

  const user = await UsersDAO.create(req.body);
  const createdUser = await UsersDAO.findById(user._id);

  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);

  res.json({ user: createdUser, token });
});

export default router;