const pi = 3.14

// pi = 5; // cannot assign some other value its just a compile time error not run time 


const product1 = function(num1:number, num2:number):number{
    return num1*num2;
}

// when defining it as const cannot re-assign. saves u from another mistake
// product1 = function(num1:number, num2:number):number{ 
//     return num1+num2;
// }

console.log(product1(4,5));