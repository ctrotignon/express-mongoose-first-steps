const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
let port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=> console.log(`Connected to port: ${port}`))