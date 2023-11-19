const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dbConnect } = require("./db");
const studentRoute = require("./routes/student");
const mentorRoute = require("./routes/mentor");
const assignMentortoStudent = require("./routes/assignMentortoStudent");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Working fine...");
});
app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);
app.use("/assignmentor", assignMentortoStudent);


app.listen(PORT, (req,res) => {
    console.log(`server is running on http://localhost:${PORT}`);
})

