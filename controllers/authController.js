const path = require("path");

module.exports = {
  login: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "login.html")),
};