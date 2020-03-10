const students = [
    {name: "Alice", score: 42},
    {name: "Bob", score:74},
    {name: "Charlie", score: 90},
    {name: "Denis", score: 39}
];

console.log(students);

//Average Score
console.log(students.reduce(
    (total,current)=>{return total + current.score},0) / students.length);

//Passed Students
console.log(students.filter((student)=>{return student.score >= 50.0}));
//Print Results Table
//Alice has failed!
//Bob has passed!
//etc.
var students_extended = students.map((student)=>{
    if(student.score >= 50.0){
        console.log("%s has passed!", student.name);
    }
    else{
        console.log("%s has failed!", student.name);
    }
    student['hasPassed'] = student.score >= 50.0;
    return student;
});
console.log(students_extended);


