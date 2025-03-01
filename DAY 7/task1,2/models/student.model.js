const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    id:{
        type: Number,
        required:true,
    },

    rollnumber:{
        type:Number,
        required:true,

    },
    name: {
      type: String,
      required: [true, "Please enter student name"],
    },
    age: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;