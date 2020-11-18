const express = require("express");
const router = express.Router();

const courses = require("./controller/courses");

router.get("/listCourse", courses.list);

module.exports = router;
