const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");

const menuRoutes = require("./routes/menuRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(
  "mongodb+srv://karan:q1bpNPw5hlst8Rek@food-delivery.8tlzl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log(":::::Connected to MongoDB:::::");
  }
);

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/menu", menuRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
