const { google } = require("googleapis");
const fs = require("fs");
const auth = require("./auth");

exports.list = async (req, res) => {
  function alunos(auth) {
    const classroom = google.classroom({ version: "v1", auth });

    classroom.userProfiles.get();

    classroom.courses.list(
      {
        pageSize: 10,
      },
      (err, a) => {
        if (err) return console.error("The API returned an error: " + err);

        return res.status(200).send({
          message: "sucess",
        });
      }
    );
  }

  fs.readFile("credentials.json", (err, content) => {
    if (err) {
      return res.status(500).json({ err });
    }
    auth.authorize(JSON.parse(content), alunos);
  });
};
