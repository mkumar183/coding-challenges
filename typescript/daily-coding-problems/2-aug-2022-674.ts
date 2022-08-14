/** A girl is walking along an apple orchard with a bag in each hand. 
 * She likes to pick apples from each tree as she goes along, but is 
 * meticulous about not putting different kinds of apples in the same bag.
 * Given an input describing the types of apples she will pass on her path, 
 * in order, determine the length of the longest portion of her path that consists 
 * of just two types of apple trees.
 * For example, given the input [2, 1, 2, 3, 3, 1, 3, 5], the longest portion 
 * will involve types 1 and 3, with a length of four. 
 * */

let main = () => {
    let input:Array<number> = [2, 1, 2, 3, 3, 1, 3, 5];
    getLongestPath(input);
}

let getLongestPath = (input:Array<number>):number => {
    let kind1:number, kind2:number;
    for (let element of input){
        kind1 = element;
        
    }
    
    
    return 4;
}

main()