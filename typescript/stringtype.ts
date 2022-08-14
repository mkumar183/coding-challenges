var s1:string = "<a href='abc' />"
var userName:string = "Manoj";
var s2:string = `my \\ \n \t \v name is ${userName}`;
console.log(s1);
console.log(s2);
console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('n'));