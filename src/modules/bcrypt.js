const bcrypt = require("bcrypt");

// Hash a password using the OpenBSD bcrypt algorithm.
// The salt is generate using a secure random number generator.
// The result is a hash string.

module.exports.generateHash = function (password) {
  let salt = bcrypt.genSaltSync(10);
  return bcrypt.hash(password, salt);
};

module.exports.comparePassword = function (password, hash) {
  return bcrypt.compareSync(password, hash);
};
