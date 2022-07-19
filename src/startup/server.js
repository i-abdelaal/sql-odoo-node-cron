require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { error } =  require('../middlewares');

const httpPort = process.env.HTTP_PORT || 3030;
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes

// Error handler middleware
app.use(error);

const serverInit = () => {
  app.listen(httpPort, () => {
    console.log(`Server launched on port ${httpPort}`);
  });
};

module.exports = Object.freeze({ serverInit });
