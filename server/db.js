const mongoose = require("mongoose");
function Connection() {
  const mongoURI = "mongodb://localhost:27017/chat";
  mongoose
    .connect(mongoURI)
    .then(() => console.log("connected DB"))
    .catch((err) => console.log(err));
}

module.exports = Connection;
