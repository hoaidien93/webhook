var jwt = require("jsonwebtoken")

class AuthController {
  getLogin(req, res) {
    let redirect = req.query.redirect || ""
    return res.render("login", { redirect })
  }

  handleLogin(req, res) {
    const { email, password, redirect } = req.body
    const token = jwt.sign({ email, name: "Hoài Diễn" }, "secret key")
    return res.render("login", { token, email })
  }
}

let authController = new AuthController()

module.exports = authController
