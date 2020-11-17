const express = require("express");
const router = express.Router();
const fs = require("fs");
const { google } = require("googleapis");

const auth = require("./controller/auth");

router.get("/listCourse", (req, res) => {
  function listCourses(auth) {
    const classroom = google.classroom({ version: "v1", auth });
    classroom.courses.list(
      {
        pageSize: 10,
      },
      (err, res) => {
        if (err) return console.error("The API returned an error: " + err);
        const courses = res.data.courses;
        console.log(courses);
        return courses;
      }
    );
  }

  fs.readFile("credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Classroom API.
    let a = auth.authorize(JSON.parse(content), listCourses);
    console.log("asdas", a);
  });

  return res.status(200).send({
    message: "sucess",
  });
});

module.exports = router;
