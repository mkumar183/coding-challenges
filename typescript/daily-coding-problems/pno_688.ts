/**A Boolean formula can be said to be satisfiable if there is a way to assign truth values to each variable such that the entire formula evaluates to true.
For example, suppose we have the following formula, where the symbol ¬ is used to denote negation:
(¬c OR b) AND (b OR c) AND (¬b OR c) AND (¬c OR ¬a)
One way to satisfy this formula would be to let a = False, b = True, and c = True.
This type of formula, with AND statements joining tuples containing exactly one OR, is known as 2-CNF.
Given a 2-CNF formula, find a way to assign truth values to satisfy it, or return False if this is impossible.
 */

interface tuple {
    x: string[2],
    y: string[2]
};


let getCombinations = (count:number):Array<string> => {
    // let output = new Array(2**(count)).fill(0).map(() => new Array(count).fill(0));
    let output:Array<string> = [];
    for (let i=0; i < 2**(count); i++){
        output.push((i >>> 0).toString(2).padStart(count,'0'));        
    }
    return output;
}

let getDistinctVars = (input):Array<string[1]> => {
    let returnArray:Array<string[1]> = [];
    for (let elem of input){
        returnArray.push(elem.x.length === 2 ? elem.x[1] : elem.x[0] );
        returnArray.push(elem.y.length === 2 ? elem.y[1] : elem.y[0] );
    }
    let returnSet = new Set(returnArray);
    returnArray = Array.from(returnSet);
    return returnArray;
}

let evalInput = (input:Array<tuple>, comb:string, distinctVars:Array<string[1]>):boolean => {
    let output:boolean = true
    let dict = {};
    // console.log(distinctVars);
    // console.log('comb', comb);  // 001
    for (let i =0; i< distinctVars.length; i++){
        dict[distinctVars[i]] = comb[i]
    }
    for(let elem of input){
        // console.log('elem', elem);  // !a OR b 
        let expression:boolean = true
        // console.log(elem.x, elem.y);
        // console.log(dict)
        if (elem.x.length === 2 ){
            expression = expression && dict[elem['x'][1]] === '1' ? false : true
        }
        else {
            expression = expression && dict[elem['x'][0]] === '1' ? true : false
        }
        // console.log('expression', expression)
        if (elem.y.length === 2 ){
            expression = expression || dict[elem['y'][1]] === '1' ? false : true
        }
        else {
            expression = expression || dict[elem['y'][0]] === '1' ? true : false
        }
        // console.log('final expression', expression)
        output = output && expression
    }
    // console.log('output', output);
    return output
}

let main_688 = ():any => {
    let input:Array<tuple> = []
    let t1:tuple = {
        x: '!c',
        y: 'b'
    };
    let t2:tuple = {
        x: 'b',
        y: 'c'
    };
    let t3:tuple = {
        x: '!b',
        y: 'c'
    };
    let t4:tuple = {
        x: '!c',
        y: '!a'
    };
    input = [t1, t2, t3, t4]
    console.log(input);
    let distinctVars = getDistinctVars(input);
    console.log(distinctVars)
    let allCombinations:Array<string> = getCombinations(distinctVars.length);

    for(let sample of allCombinations){
        evalInput(input, sample, distinctVars)? console.log(sample) : undefined
    }
    
}
main_688();