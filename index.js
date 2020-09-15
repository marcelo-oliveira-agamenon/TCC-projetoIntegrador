const express = require("express");
const app = new express();
const path = require("path");
const router = express.Router();

router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/pages/index.html"));
});

app.use("/", router);
app.listen(3000);
