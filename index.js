const { db } = require('./src/auth/models');
const server = require('./src/server');

db.sync().then(() => {
  server.start(process.env.PORT || 3000);
}).catch(console.error);
