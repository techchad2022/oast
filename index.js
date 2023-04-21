//  Importing packages
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Kernal = require("./model/exploit")

// Connecting MONGODB
mongoose.connect(
  process.env.MONGOURL,
).catch (error => console.log(error));

// Start application
const app = express();
const port = process.env.PORT || 3000;
