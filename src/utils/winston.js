import winston, { format } from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.align(),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({ 
      level: 'error',
      filename: './logs/error.log'
    }),
    new winston.transports.File({
      filename:
      './logs/combined.log'
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}