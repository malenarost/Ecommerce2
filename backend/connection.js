require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr =
  "mongodb+srv://rostmalena:nv0PPp1IhmBjRv9d@cluster1.wdy42ir.mongodb.net/";

mongoose
  .connect(connectionStr, { useNewUrlparser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
