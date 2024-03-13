const path = require('path');
const express = require('express');
const petLoggerRouter = require('./routers/petLoggerRouter');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/authRouter.js');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());

// parsing requests to json
app.use(express.json());
app.use(cookieParser());
// define the route handlers
app.use('/api', petLoggerRouter);
app.use('/auth', authRouter);

app.use(express.static(path.resolve(__dirname, '../dist')));

// Unknown route handler here
app.use('*', (req, res) => {
  console.log('This is 404');
  res.sendStatus(404);
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error from middleware',
    status: 500,
    message: { err: 'ERROR!!!' },
  };

  const errorObj = Object.assign({}, defaultErr, err);

  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}: http://localhost:${PORT}/`);
});

module.exports = app;
