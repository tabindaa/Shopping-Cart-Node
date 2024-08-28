const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public"))); // serving static files//css files here
app.use(express.urlencoded({ extended: true })); //parsing request body
app.use( adminData.routes);
app.use(shopRoutes);

app.use("/", (req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404", {});
});

app.listen(3300, () => {
  console.log("Listening on 3300");
});
