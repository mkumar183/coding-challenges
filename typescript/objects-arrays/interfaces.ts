/** interfaces are just conduits and not actual functions
 * there are more like object templates and not the actual objects or functions itself
 */

// compiled .js file will not have this interface definition
interface IProduct {
    id: number,
    name: string,
    description: string,
    price?: number
}

var product1:IProduct = {
    id: 123, 
    name: "abc", 
    description: "abc", 
    price: 1
}; // type safety is in place. all properties must be defined

var product2:IProduct = {
    id: 124, 
    name: "abc", 
    description: "abc" 
    // price: 200 :optional parameter
}; // type safety is in place. all properties must be defined

