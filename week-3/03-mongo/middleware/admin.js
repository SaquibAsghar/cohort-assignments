const { Admin } = require("../db");
async function adminMiddleware(req, res, next) {
  const { username: userName, password } = req.headers;

  const isAdminPresent = await Admin.findOne({
    userName,
    password,
  });

  console.log({ isAdminPresent });
  if (!isAdminPresent) {
    return res.status(403).json({
      msg: "Admin user not found",
    });
  }
  next();
}

module.exports = adminMiddleware;
