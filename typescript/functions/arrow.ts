var doubleMe2 = (num:number) => num*2
console.log(doubleMe2(4));

var doubleMe3 = (num:number) => {return num*2} // curly braces must for adding return
console.log(doubleMe3(6));

var hello3 = ():string => {  // return type is string
    return "Hello";
}
console.log(hello3());

var hello4 = (name: string):string => {  // input type is string
    return "Hello" + " " + name;
}
console.log(hello4("Manoj"));

var multiply2 = (num1: number, num2:number): number => num1*num2;
console.log(multiply2(5,4));

var myArray:Array<any> = [];
for (var i =0 ; i< 10; i++){
    myArray.push(():number => {return i}); //pushes fns to array
}


for (var i =0 ; i< 10; i++){
    console.log(myArray[i]());  //executes fns from array
}


