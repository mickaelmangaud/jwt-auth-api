import { Router } from 'express';
import { UsersDAO } from '../dao';

const router = new Router();

router.put('/register', async (req, res) => {
  // TODO: validate payload
  const user = await UsersDAO.create(req.body);
  const createdUser = await UsersDAO.findById(user._id);

  res.json({ createdUser });
});

export default router;