const express = require("express");
const router = express.Router();
const fs = require("fs");
const { google } = require("googleapis");

const auth = require("./controller/auth");

router.get("/listCourse", (req, res) => {
  let a;
  /**
   * Lists the first 10 courses the user has access to.
   *
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  function listCourses(auth) {
    const classroom = google.classroom({ version: "v1", auth });
    let resp;
    classroom.courses.list(
      {
        pageSize: 10,
      },
      (err, res) => {
        if (err) return console.error("The API returned an error: " + err);
        const courses = res.data.courses;
        if (courses && courses.length) {
          resp = courses;
        } else {
          resp = "nada";
        }
      }
    );
    return resp;
  }

  fs.readFile("credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Classroom API.
    a = auth.authorize(JSON.parse(content), (b) => {
      console.log(b);
      return b;
    });
  });

  return res.status(200).send({
    message: "sucess",
    body: a,
  });
});

module.exports = router;
