'use strict';

const { Users } = require('../models/index.js');

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) {
      throw new Error('Invalid Login');
    }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await Users.authenticateWithToken(token);

    req.user = validUser;
    req.token = validUser.token;

    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
};
