const { google } = require("googleapis");
const fs = require("fs");
const auth = require("./auth");
const Turma = require("../models/Turma");

exports.list = async (req, res) => {
  function listCourses(auth) {
    const classroom = google.classroom({ version: "v1", auth });
    classroom.courses.list(
      {
        pageSize: 10,
      },
      (err, a) => {
        if (err) return console.error("The API returned an error: " + err);

        a.data.courses.map(async (course) => {
          const turma = await Turma.create({
            id: course.id,
            name: course.name,
            section: course.section,
            description: course.descriptionHeading,
            room: course.room,
            state: course.courseState,
          });
        });

        return res.status(200).send({
          message: "sucess",
          body: a.data.courses,
        });
      }
    );
  }

  fs.readFile("credentials.json", (err, content) => {
    if (err) {
      return res.status(500).json({ err });
    }
    auth.authorize(JSON.parse(content), listCourses);
  });
};
