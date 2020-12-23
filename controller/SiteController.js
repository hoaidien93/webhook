var jwt = require("jsonwebtoken")

class SiteController {
  postJob(req, res) {
    console.log(req)
    return res.send("1")
  }
}

let siteController = new SiteController()

module.exports = siteController
