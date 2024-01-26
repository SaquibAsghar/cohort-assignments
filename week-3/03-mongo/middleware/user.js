const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const { username: userName, password } = req.headers;

  const isUserPresent = await User.findOne({
    userName,
    password,
  });

  if (!isUserPresent) {
    return res.status(403).json({
      msg: "User not found",
    });
  }
  next();
}

module.exports = userMiddleware;
