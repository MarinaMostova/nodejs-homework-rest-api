const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Mostova:LuO2lPc69stXf78b@cluster0.vjdxvrm.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server up and running!");
// });
