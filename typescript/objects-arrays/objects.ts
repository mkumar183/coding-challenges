var student = {
    firstname: "John",
    lastName: "Paul",
    score:90
}

console.log(student.firstname);
console.log(student.score);

for(var item in student){
    console.log(item);
    console.log(student[item]);
}

var {firstname,score,lastName} = student; //destructuring an object. use exact property name.
console.log(firstname,score, lastName);