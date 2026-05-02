import express from "express";
import {
  getAllCryptos,
  getTopGainers,
  getNewListings,
  createCrypto,
} from "../controllers/cryptoController.js";

const router = express.Router();

router.get("/", getAllCryptos);
router.get("/gainers", getTopGainers);
router.get("/new", getNewListings);
router.post("/", createCrypto);

export default router;
