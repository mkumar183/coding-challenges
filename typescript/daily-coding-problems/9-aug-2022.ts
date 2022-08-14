/**
 * Given a list of words, return the shortest unique prefix of each word. For example, given the list:
 * dog, cat, apple, apricot, fish
 * Return the list:
 * d, c, app, apr, f 
 * */

let getShortestPrefixes = (list:Array<string>):Array<string> => {
    let prefixes:Array<string> = []
    for(let item of list){
        prefixes.push(item.substring(0,1));
    }
    return prefixes;
}

let addLettersToPrefixes = (prefixes:Array<string>, list:Array<string>, myDictionary) => {
    for (let key in myDictionary){
        for (let ind of myDictionary[key]){
            prefixes[ind] = list[ind].substring(0,prefixes[ind].length+1)
        }
    }
}

let getIndexes = (list:Array<string>):{} => {
    let ind:number = 0;
    let indexes = {}

    for(let elem of list){
        ind = list.indexOf(elem);
        let returnValue:Array<number> = [];
        while(ind != -1){
            returnValue.push(ind)
            ind = list.indexOf(elem,ind+1);
        }
        if (returnValue.length > 1){
            indexes[elem] = returnValue;
        }
    }
    return indexes;
  }


let main_09_09_2022 = () => {
    let input:Array<string> = ['dog','cat','apple','appricot','fish','finish'];
    let output = getShortestPrefixes(input);
    let indexes = getIndexes(output);

    while(Object.keys(indexes).length > 0){
        addLettersToPrefixes(output, input, indexes); // add additional letters to duplicate key values 
        indexes = getIndexes(output);
    }
    console.log(output);    
}
main_09_09_2022();