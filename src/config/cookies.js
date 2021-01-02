export const cookiesOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV != "development",
    maxAge: 1000 * 60 * 60 * 24,
};
