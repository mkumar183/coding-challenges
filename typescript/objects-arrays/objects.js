var student = {
    firstname: "John",
    lastName: "Paul",
    score: 90
};
console.log(student.firstname);
console.log(student.score);
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
var firstname = student.firstname, score = student.score, lastName = student.lastName;
console.log(firstname, score, lastName);
