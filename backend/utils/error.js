module.exports = (error, req, res, next) => {
  console.log(error.message);
  res.status(500).json({ message: error.message });
};
