import { Router } from 'express';

const router = new Router();

router.get('/login', (req, res) => {
  res.send({ message: 'login route' })
})

export default router;