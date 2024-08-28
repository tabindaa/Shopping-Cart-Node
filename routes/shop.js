const express = require("express");
const path = require("path");

const rootPath = require("../utils/path");

const routes = express.Router();
const adminData = require("./admin");

routes.get("/", (req, res) => {
  console.log("shop", adminData.products);
  // res.sendFile(path.join(rootPath, "views", "shop.html"));
  res.render("shop", { pageTitle: "Page Title", products: adminData.products});
});
module.exports = routes;
