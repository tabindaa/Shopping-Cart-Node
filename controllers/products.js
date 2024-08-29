const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootPath, "views", "admin.html"));
  res.render("admin", { pageTitle: "Page Title" });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  const products = Product.fetchAll((p) => {
    // res.sendFile(path.join(rootPath, "views", "shop.html"));
    res.render("shop", { pageTitle: "Page Title", prods: p });
  });
};
