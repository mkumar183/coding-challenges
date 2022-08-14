/*
In javascript understanding following concepts are unique:
- storing functions as variables
- storing functions as array elements
- invoking functions using variables: by passing inputs
- invoking function inside a function. console.log(somefunction())
- is a good example. where first somefunction is invoked and then on 
- return value console.log is invoked
*/

function hello(name) {
    return "hello function " + name;
}
function add(a1, a2) {
    return a1 + a2;
}
function display(id, name, role) {
    console.log("id", id);
    console.log("name", name);
    if (role != undefined)
        console.log("role", role);
}
function display2(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("id", id);
    console.log("name", name);
    if (role != undefined)
        console.log("role", role);
}
function calculator(fun) {
    console.log(fun(10, 20));
}
// console.log(hello("Manoj"));
// console.log(add(1,2));
// display(123, "Manoj", "Manager");
// display(1233, "Vikas");
// display2(1233, "Vikas");
// calculator(add(20,30)); // gives error because add(20,30) is not a function but a return value from function
calculator(add);
//example of returning a function
function calculator2() {
    function subtract(a1, a2) {
        return a1 - a2;
    }
    return subtract;
}
// more clean way
var sub = calculator2();
console.log(sub(10, 5)); //inside console log since function only returns a value 
//another way shortcut
console.log("first get function then invoke it", calculator2()(10, 8));
// rewrite hello as anonymous function assign to a variable
var hello2 = function (name) {
    return "hello function " + name;
};
console.log(hello2("ABC"));
