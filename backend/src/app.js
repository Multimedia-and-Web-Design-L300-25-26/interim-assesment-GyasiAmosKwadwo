import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cryptoRoutes from "./routes/cryptoRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const normalizeOrigin = (origin = "") => origin.trim().replace(/\/+$/, "");
const configuredOrigins = (
  process.env.CLIENT_URLS || process.env.CLIENT_URL || "http://localhost:5173"
)
  .split(",")
  .map(normalizeOrigin)
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const normalizedRequestOrigin = normalizeOrigin(origin);
      const isAllowed = configuredOrigins.includes(normalizedRequestOrigin);

      if (isAllowed) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Coinbase clone API is running",
  });
});

app.use("/", authRoutes);
app.use("/", profileRoutes);
app.use("/crypto", cryptoRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

app.use(errorHandler);

export default app;
