const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require('./routes/pins');

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB Connected!");
  })
  .catch((err) => console.log(err));

	app.use('/api/pins', pinRoute);

app.listen(4000, () => {
  console.log("Server running");
});
