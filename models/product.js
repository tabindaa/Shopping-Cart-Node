const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      console.log(fileContent);
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }

      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log;
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      if (fileContent) cb(JSON.parse(fileContent));
    });
    return products;
  }
};
