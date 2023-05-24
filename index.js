'use strict';

require('dotenv').config();

// const { start } = require('./src/server');
// const PORT = process.env.PORT || 3002;
const { sequelize } = require('./src/auth/models');


// Start up DB Server
sequelize.sync()
  .then(() => {
    // Start the web server
    require('./src/server.js').start(process.env.PORT);
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

