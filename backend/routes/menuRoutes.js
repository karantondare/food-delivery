import express from "express";
import Menu from "../models/MenuModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const fullMenu = await Menu.find({});

    res.status(200).json(fullMenu);
  } catch (error) {}
});

export default router;
