const User = require("../models/user");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.userCookie) {
    const decoded = await userCookies.verify(
      req.cookies.userCookie,
      process.env.USER_SECRET
    );
    req.userFound = await User.findById(decoded.id);
    console.log('JENNY',userCookie)
  }

  next();
};
//<----------------LOG THE CURRENT USER OUT-------------------------->

exports.logout = (req, res, next) => {
  res.cookie("userCookie", "logout", {
    expires: new Date(Date.now() + 2 * 1000),
    httpOnly: true
  });

  next();
};
