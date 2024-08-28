const express = require("express");
const path = require("path");

const rootPath = require("../utils/path");

const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootPath, "views", "admin.html"));
  res.render("admin", { pageTitle: "Page Title" });
});
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = routes;
exports.routes = router;
exports.products = products;
