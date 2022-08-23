/**reduce (also known as fold) is a function that takes in an array, a combining function, and an initial value 
 * and builds up a result by calling the combining function on each element of the array, left to right. 
 * For example, we can write sum() in terms of reduce:
 * def add(a, b):
    return a + b
 * def sum(lst):
    return reduce(lst, add, 0)
 * This should call add on the initial value with the first element of the array, 
 * and then the result of that with the second element of the array, and so on until we reach the end, when we return the sum of the array.
   Implement your own version of reduce. 
   */


let sum = (a:number,b:number):number => {
    return a+b;
}

let multiply = (a:number,b:number):number => {
    return a*b
}

let add = (a:string, b:string):string => {
    return a+b
}

let myReduce = (list:Array<any>, callback: Function, initial:any):any => {
    let result:any;     
    for (let elem of list) {
        initial = callback(initial, elem)
    }
    return initial;
} 

let main_12_09_2022 = () => {
    let list1 = [1,2,3,4,5]
    let list2 = ['a','b','c','e','d']
    console.log(myReduce(list1, sum, 0));
    console.log(myReduce(list1, multiply, 0));
    console.log(myReduce(list2, add, ''));    
}

main_12_09_2022();