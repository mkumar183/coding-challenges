var doubleMe2 = function (num) { return num * 2; };
console.log(doubleMe2(4));
var doubleMe3 = function (num) { return num * 2; }; // curly braces must for adding return
console.log(doubleMe3(6));
var hello3 = function () {
    return "Hello";
};
console.log(hello3());
var hello4 = function (name) {
    return "Hello" + " " + name;
};
console.log(hello4("Manoj"));
var multiply2 = function (num1, num2) { return num1 * num2; };
console.log(multiply2(5, 4));
var myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myArray[i]());
}
