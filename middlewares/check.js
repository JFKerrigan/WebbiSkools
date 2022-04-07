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

exports.logout = async (req, res, next) => {
const options = {
  expires: new Date(Date.now() = 10000),
  httpOnly: true,
}

  res.cookie("userCookie", "expiredToken", options);
  res.status(200).json({ status: success})

  next();
};
