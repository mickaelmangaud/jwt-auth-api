const bearerAnnouncement = (req, res, next) => {
  res.setHeader('WWW-Authenticate', `Bearer realm=${req.hostname}${req.baseUrl}, charset='UTF-8'`);
  next();
};

export default bearerAnnouncement;
