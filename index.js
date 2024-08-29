const express = require("express");
const path = require("path");

const errorController = require("./controllers/error");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public"))); // serving static files//css files here
app.use(express.urlencoded({ extended: true })); //parsing request body
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3300, () => {
  console.log("Listening on 3300");
});
