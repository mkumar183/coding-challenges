var pi = 3.14;
// pi = 5; // cannot assign some other value its just a compile time error not run time 
var product1 = function (num1, num2) {
    return num1 * num2;
};
product1 = function (num1, num2) {
    return num1 + num2;
};
console.log(product1(4, 5));
