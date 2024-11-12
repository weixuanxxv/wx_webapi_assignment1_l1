const student = require("./server.js");
//Function 1
const newStudent = { id:4, name:"wx", school:"SEG",grade:50};
console.log(student.createstudentinfo(newStudent));


//Function 2

console.log(student.updatestudentinfo(2,"SEG",70));

//Function 3
console.log(student.deletestudentbyid(4));

//Function 4
console.log(student.checkgradeawarded(1));
console.log(student.checkgradeawarded(2));
console.log(student.checkgradeawarded(3));
//Function 5
console.log(student.getAverageGrade("SBM")); 
//Function 6
console.log(student.totalstudentsineachsch("SBM"));
