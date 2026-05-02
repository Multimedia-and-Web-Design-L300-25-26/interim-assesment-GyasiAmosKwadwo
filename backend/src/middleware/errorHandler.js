const errorHandler = (error, _req, res, _next) => {
  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: Object.values(error.errors)
        .map((item) => item.message)
        .join(", "),
    });
  }

  if (error.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "A record with that value already exists",
    });
  }

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error",
  });
};

export default errorHandler;
