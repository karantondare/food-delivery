const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const menuRoutes = require("./routes/menuRoutes.js");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/menu", menuRoutes);

const url = "mongodb://localhost/pizza";
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Connection failed...");
  });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
