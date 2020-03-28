require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');


// Connect to mongodb database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true, useUnifiedTopology: true
});

//Testing connection with database
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

app.use(express.json());

// Setting a router 'subscribers'
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

// Starting server 
app.listen(process.env.PORT_SERVER, 
  () => console.log('Server started!'));