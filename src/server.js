const express = require('express');
const app = express();
const authRouter = require('./auth/router');
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  },
};
