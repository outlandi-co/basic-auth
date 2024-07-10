const base64 = require('base-64');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return next('Invalid Login');
  }

  const basic = req.headers.authorization.split(' ').pop();
  const [username, password] = base64.decode(basic).split(':');

  try {
    const user = await User.authenticateBasic(username, password);
    req.user = user;
    next();
  } catch (e) {
    next('Invalid Login');
  }
};
