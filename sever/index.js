const express = require("express");
const cors = require('cors');
const { connect } = require('mongoose');
require('dotenv').config();

const app = express();

connect(process.env.MONGO_URL)
  .then(() => app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`)))
  .catch(error => console.log(error))
