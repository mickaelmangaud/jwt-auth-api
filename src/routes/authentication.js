import { Router } from 'express';

const router = new Router();

router.get('/register', (req, res) => {
  res.json({ message: 'Register route' });
});

export default router;