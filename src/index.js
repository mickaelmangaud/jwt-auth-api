import "dotenv/config";
import "./config/db";
import express from "express";
import { registerRoutes } from "./routes";
import { registerMiddlewares } from "./middlewares";
import { errorHandler, notFoundHandler } from "./middlewares";

const app = express();
const PORT = process.env.PORT || 5000;

/* Middlewares */
registerMiddlewares(app);

/* Routes */
registerRoutes(app);

/* Not found Handler */
app.use(notFoundHandler);

/* Error handler */
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
