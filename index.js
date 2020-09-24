const express = require("express");
const app = new express();

const routes = require("./routes");

app.use("/static", express.static("./pages"));

app.use(routes);
app.listen(3000);
