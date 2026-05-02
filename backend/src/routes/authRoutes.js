import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/register", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Use POST /register to create a user account",
  });
});

router.get("/login", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Use POST /login to authenticate a user",
  });
});

export default router;
