// two ways of defining arrays
var levels = [20, 30, 12, 34, 56, 78];
var levels2 = [20, 30, 12, 34, 56];
console.log(levels, levels2);
console.log(levels.toString());
console.log(levels.join(" "));
console.log(levels.slice(3, 5));
console.log(levels.toString()); // array is not modified
console.log(levels.splice(2, 3, 88, 99, 100, 101, 102)); // replaces set of elements with new elements
console.log(levels.toString());
levels.push(10, 20, 30);
console.log(levels.toString());
console.log(levels.pop());
console.log(levels.toString());
// for each function of array 
var numbers = [45, 4, 9, 16, 25];
var total = 0;
numbers.forEach(myFunction);
function myFunction(value, index, array) {
    total += value;
}
console.log(total);
