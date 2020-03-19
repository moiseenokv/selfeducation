const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerPosts = require('./routes/posts');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', routerPosts);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    global.console.log('connected to db');
  },
);

app.listen(3000);
