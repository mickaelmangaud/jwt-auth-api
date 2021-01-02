import express from "express";
import helmet from "helmet";
import bearerAnnoucement from "./bearerAnnouncement";

export const registerMiddlewares = (app) => {
    // logger.info(`applygin middlewares...`);
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bearerAnnoucement);
};

export { default as notFoundHandler } from "./notFoundHandler";
export { default as errorHandler } from "./errorHandler";
