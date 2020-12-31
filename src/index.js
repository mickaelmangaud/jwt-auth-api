import 'dotenv/config';
import express from 'express';
import { registerRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
