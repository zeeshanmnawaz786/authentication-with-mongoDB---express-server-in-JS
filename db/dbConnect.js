
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(
        process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;