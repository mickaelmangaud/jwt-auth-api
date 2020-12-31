import 'dotenv/config';
import './config/db';
import express from 'express';
import { registerRoutes } from './routes';
import { errorHandler, notFoundHandler } from './middlewares';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

registerRoutes(app);

app.use(notFoundHandler);

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
