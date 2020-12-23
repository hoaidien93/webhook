var express = require("express")
var router = express.Router()
const authController = require("../controller/AuthController")
const siteController = require("../controller/SiteController")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
})
router.get("/login", authController.getLogin)
router.post("/login", authController.handleLogin)

router.post("/post-job", siteController.postJob)

module.exports = router
