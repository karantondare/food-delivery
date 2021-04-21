import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import menuRoutes from "./routes/menuRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
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
app.use(express.json());
// app.use(express.urlencoded());
app.use("/menu", menuRoutes);
app.use("/users", userRoutes);
app.use("/", orderRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
