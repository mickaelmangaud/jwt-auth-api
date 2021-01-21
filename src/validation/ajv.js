import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import registerSchema from './register.schema.json';
import loginSchema from './login.schema.json';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
ajvErrors(ajv);

export const validateRegistration = ajv.compile(registerSchema);
export const validateLogin = ajv.compile(loginSchema);