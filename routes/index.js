var express = require("express");
//express facilite la creation d un backend qui jouera le rôle de webservice
//c'est un framework qui va apporter des fonctionnalités clé en main et imposer une structure au projet
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
