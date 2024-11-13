Assignment 1
# Student Data Management
The Student Data Management is a simple Node. js-based solution designed to help manage student data. It provides various functions, including creating, updating, and deleting student information, checking grade awards, calculating average scores, and counting students by school.

# Functions
1. [createstudentinfo](#createstudentinfo)
2. [updatestudentinfo](#updatestudentinfo)
3. [deletestudentbyid](#deletestudentbyid) 
4. [checkgradeawarded](#checkgradeawarded)
5. [getAverageGrade](#getAverageGrade)
6. [totalstudentsineachsch](#totalstudentsineachsch)
## Steps Before Starting

- Create an array name `studentarray` to hold student data
- Add student objects into the `studentarray` as shown below 

```js
const studentarray =  [ 
    { id:1 , name:"John Cena" , school:"SEG" , grade:"80"},
    { id:2 , name:"Dae Ong" , school:"SBM" , grade:"70"},
    { id:3 , name:"Woyaokule" , school:"SBM" , grade:"49"}
 ]
```
## createstudentinfo
- `newStudent`: Delcare a const variable that holds the student object to be added.
- `createstudentinfo(newStudent)`: This function to add `newStudent` to the `studentarray`.
- if `newStudent` id doesn't exist in `studentarray` it will be inserted by `.push` that was declared in `studentdata.js`.
```js
const newStudent = { id:4, name:"wx", school:"SEG",grade:50};
createstudentinfo(newStudent);
```
- If `newStudent` id exists in array output:
```js
Student Id already exists.
Failed to add student due to id already exists.
```

## updatestudentinfo
- `updatestudentinfo`: Function to update existing student based on their id.
- `updatestudentinfo(2,"SEG",70)`: Call the function to update student info based on id the first value will be the id so in this case "2" is the id, and the other value after that will be the new info that is going to be updated.
```js
updatestudentinfo(2,"SEG",70);
```
- if id given doesn't exist in `studentarray` it will be return:
 ```js
No student id is found.
```


## deletestudentbyid
- `deletestudentbyid`: Function to delete existing student based on their id
- `deletestudentbyid(4)`: Call this function to delete student info based on id the first value will be the id so in this case "4" is the id. Hence when run if id with this value is found in `studentarray` it will delete it using `.splice`.
```js
deletestudentbyid(4);

```
- if id given doesn't exist in `studentarray` it will be return:
 ```js
No student deleted as id can't be found
```

## checkgradeawarded
- `checkgradeawarded`: This Function is meant to give a grade based on the student Score. For example, if they score 90 the grade awarded will be A
- `checkgradeawarded(1)`: Call this function to check student grades based on their id, afterwards they will retrieve the score and give a grade based on the conditions declared in `studentdata.js`.
```js
checkgradeawarded(1)

```
- if id given doesn't exist in `studentarray` it will be return:
 ```js
Student not found
```

## getAverageGrade
- `etAverageGrade`: This Function is meant to check the average score of all students in a school
- `getAverageGrade("SBM")`: Call this function to get the average grade all students scored in the school "SBM".
```js
getAverageGrade("SBM");

```
- if no students found in the School return:
 ```js
No students found for school SBM
```
## totalstudentsineachsch
- `totalstudentsineachsch`: This Function is to check the total student that belong to the same school
- `totalstudentsineachsch("SBM")`: Call this function to get the total students in school "SBM".
```js
totalstudentsineachsch("SBM")

```
- if no students found in the School return:
 ```js
No students found for school SBM
```


# References
- https://stackoverflow.com/questions/24834812/space-in-between-json-stringify-output (for the outputting array with space indentation)
- https://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript (removing object from array)
- https://www.w3schools.com/java/java_conditions_shorthand.asp (ternary operator)
- https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript (ternary operator)
