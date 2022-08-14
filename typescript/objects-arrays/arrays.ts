var courses:any = ["Angular","React","JMS", "ES6"]
courses.push("Sprint security");
courses.push(10);

for (var i=0; i<courses.length;i++){
    console.log(courses[i]);
}

var[a,b,c] = courses; //destructuring
console.log(a,b,c);