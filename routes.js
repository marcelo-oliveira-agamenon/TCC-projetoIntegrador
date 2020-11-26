const express = require("express");
const router = express.Router();

const courses = require("./controller/courses");
const alunos = require("./controller/alunos");
const login = require("./controller/login");

router.get("/listCourse", courses.list);
router.get("/alunos", alunos.list);
router.post("/login", login.auth);

module.exports = router;
