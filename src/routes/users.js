import { Router } from 'express';

const router = new Router();

router.put('/register', (req, res) => {
  
  res.json({ message: 'Users register'});
});

export default router;