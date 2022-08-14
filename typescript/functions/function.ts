function hello(name:string):string {
    return "hello function " + name
}

function add(a1:number, a2:number):number {
    return a1+a2;
}

function display(id:number, name:string, role?:string){ //optional parameter
    console.log("id", id);
    console.log("name", name);
    if (role != undefined) console.log("role", role);
}

function display2(id:number, name:string, role:string = "Normal"){ //default value
    console.log("id", id);
    console.log("name", name);
    if (role != undefined) console.log("role", role);
}

function calculator(fun:any):void {
    console.log(fun(10,20));
}

// console.log(hello("Manoj"));
// console.log(add(1,2));
// display(123, "Manoj", "Manager");
// display(1233, "Vikas");
// display2(1233, "Vikas");

// calculator(add(20,30)); // gives error because add(20,30) is not a function but a return value from function
calculator(add);

//example of returning a function
function calculator2():any {
    function subtract(a1:number, a2:number):number{
        return a1-a2;
    }
    return subtract;
}

// more clean way
var sub = calculator2();
console.log(sub(10,5)); //inside console log since function only returns a value 

//another way shortcut
console.log("first get function then invoke it", calculator2()(10,8));

// rewrite hello as anonymous function assign to a variable
var hello2 = function (name:string):string {
    return "hello function " + name
}

console.log(hello2("ABC"));