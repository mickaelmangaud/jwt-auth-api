export const sendResponse = (res, code, payload) => {
  res.status(code).json(payload);
};
