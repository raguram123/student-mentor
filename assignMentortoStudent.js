const router = require("express").Router();
const objId = require("mongoose").Types.ObjectId;

const { student, mentor } = require("../db");

router.post("/newMentor", async (req, res) => {
  console.log("assignMentorToStudent");
  
  try {
    const mentorData = await mentor.findById(req.body.mentorId);
    mentorData.studentsAssigned = [
      ...mentorData.studentsAssigned,
      ...req.body.studentsArray,
    ];
    mentorData.save();
    
    req.body.studentsArray.forEach(async (stud) => {
      const temp = await student.findById(stud);
      temp.mentorAssigned = req.body.mentorId;
      temp.save();
    });

    res.send("Mentor Added to Students and updated in mentor document ");
  } catch (e) {
    console.log(e, "error in assignmentor ");
    res.status(400).send("error");
  }
});



    if (oldment.studentsAssigned.length < 0) {
      console.log("oldment");
      return;
    } else {
      let newAssigned = oldment.studentsAssigned;
      const indexpos = newAssigned.indexOf(objId(req.body.studentId));
      console.log(indexpos, "index");
      newAssigned.pop(indexpos);
      console.log(newAssigned);
      oldment.studentsAssigned = newAssigned;
    }

   

    
    let newment = await mentor.findById(req.body.newMentorId);
    if (newment.studentsAssigned.length < 0) {
      return;
    } else {
      if (!newment.studentsAssigned.includes(req.body.studentId)) {
        newment.studentsAssigned = [
          ...newment.studentsAssigned,
          req.body.studentId,
        ];
      }
    }
    newment.save();


