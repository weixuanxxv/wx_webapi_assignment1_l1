 
// //create a studentarray with exsiting data
const studentarray =  [ 
    { id:1 , name:"John Cena" , school:"SEG" , grade:"80"},
    { id:2 , name:"Dae Ong" , school:"SBM" , grade:"70"},
    { id:3 , name:"Woyaokule" , school:"SBM" , grade:"49"}
 ]



module.exports = {
studentarray, // include array into the exports so can be used in app.js
 
//Function 1 Creating a new student info
 createstudentinfo(students)
{
//If new student id arlready exists in student data
if (studentarray.some(student => student.id === students.id )){
    console.error("Failed to add student due to id already exists");
 return;
    
}
// if id , name or school is empty
else if (!students.id || !students.name ||!students.school){
    console.error("Failed to add student due to missing fields");
  return;
    
}
// if new student id is not a integer
else if(!Number.isInteger(students.id)){
    console.error("Failed to add student due to incorrect format.Id need to be a interger!");
  return;
    
}
else{
studentarray.push(students);   //using .push() to insert data into the studentarray
return `Student info added succesfully! \n ${JSON.stringify(studentarray,null,2)}` ; //null , 2 represent two space indetation for better reading 

}

},
//Function 2
//Update existing Student school and grade based on student id
updatestudentinfo (studentid , newstudentschool , newstudentgrade){ 
    const student = studentarray.find(student => student.id== studentid); // declare the conditions in the const student first 
    if(student){ // if condtions is true
        student.school = newstudentschool; //update student school
        student.grade = newstudentgrade;//update student grade
        

        return `${student.name} from ${student.school} info updated`; 
    }
    else{
        console.error("No student id is found");
      return;
    }

},
//Function 3
//Deleteing student info by their id
 deletestudentbyid (studentid){
    const student = studentarray.find(student => student.id== studentid);
    if(student){
        studentarray.splice(studentid); //using .splice to remove object from array
        return "Student has been deleted!"
    }else{
       console.error("No student deleted as id can't be found");
      return;
    }
},
// //Function 4 check grade
//checking student grade based on their id
 checkgradeawarded (studentid){
   const student = studentarray.find(student => student.id == studentid);
   if (student){
    const grade = parseInt(student.grade);
    const gradeawarded = 
        grade >= 80 ? "A" : //this code mean if grade is equal to more than  80 gradeawarded will be A, and so on..
        grade >= 75 ? "B+" :
        grade >= 60 ? "B" :
        grade >= 55 ? "C" :
        grade >= 50 ? "D" : "F";
    
  return `${student.name} from ${student.school} grade awarded is ${gradeawarded}.`;

       
   }else
   console.error("Student not found");
   return;
},


//Function 5 avg grade by sch
 getAverageGrade(studentschool) {
    let totalGrade = 0;
    let count = 0;
const lowercase = studentschool.toLowerCase(); // delcare another variable that will convert studentschool to lowercase first
    studentarray.forEach(student => {
        if (student.school.toLowerCase() === lowercase) {  //convert student.school to lowercase and compare with the prev lowercase variable to make sure is not affected by any caps letter.
            totalGrade += parseInt(student.grade);
            count += 1;
        }
    });

    if (count === 0) {
      console.error(`No students found for school ${studentschool}.`);
      return;
    
    }

    const averageGrade = totalGrade / count;
    return `The average grade for students in ${studentschool} is ${averageGrade.toFixed(1)}.`;
},

//function 6 display all students in each school

totalstudentsineachsch (studentschool){
    let count = 0;
    studentarray.forEach(student => {
         if (studentschool === student.school){   
            count ++;}
        } 
        
    );
    if(count == 0){
            console.error(`No students found for school ${studentschool}.`);
      return;
    }

    return `The total student for ${studentschool} is ${count}`;
    
}





};


