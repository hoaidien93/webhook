var jwt = require("jsonwebtoken")

class SiteController {
  postJob(req, res) {
    console.log(req.header.authorization)
    console.log(req.body)
    return res.send("1")
  }
}

let siteController = new SiteController()

module.exports = siteController
