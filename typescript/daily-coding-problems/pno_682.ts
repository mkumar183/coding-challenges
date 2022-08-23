/**currying functions
 * 
 */


function currying(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

function multi_1(x,y) {
    return x * y
}

let multi = currying(multi_1,1)

console.log(multi(1)(2)) // 6