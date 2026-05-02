import Crypto from "../models/Crypto.js";

const normalizeCryptoPayload = (payload) => {
  const parsedChange =
    typeof payload.change24h === "string"
      ? Number.parseFloat(payload.change24h.replace("%", ""))
      : payload.change24h;

  return {
    name: payload.name,
    symbol: payload.symbol,
    price: Number(payload.price),
    image: payload.image,
    change24h: parsedChange,
  };
};

const getAllCryptos = async (_req, res, next) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    next(error);
  }
};

const getTopGainers = async (_req, res, next) => {
  try {
    const cryptos = await Crypto.find().sort({ change24h: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    next(error);
  }
};

const getNewListings = async (_req, res, next) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 }).limit(10);

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    next(error);
  }
};

const createCrypto = async (req, res, next) => {
  try {
    const payload = Array.isArray(req.body) ? req.body : [req.body];

    const invalid = payload.filter(
      ({ name, symbol, price, image, change24h }) =>
        !name || !symbol || price === undefined || !image || change24h === undefined
    );

    if (invalid.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Each entry must include name, symbol, price, image, and change24h",
        invalid,
      });
    }

    const cryptos = await Crypto.insertMany(payload.map(normalizeCryptoPayload));

    res.status(201).json({
      success: true,
      message: `${cryptos.length} cryptocurrency${cryptos.length > 1 ? "s" : ""} created successfully`,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    next(error);
  }
};

export { getAllCryptos, getTopGainers, getNewListings, createCrypto };
