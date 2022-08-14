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

let getIndexes = (elem:string, index, list:Array<string>):void => {
    let ind:number = 0;
    let returnValue:Array<number> = [];
    ind = list.indexOf(elem);
    while(ind != -1){
        returnValue.push(ind)
        ind = list.indexOf(elem,ind+1);
    }
    if (returnValue.length > 1) {
        myDictionary[elem] = returnValue
    }
  }

let addLettersToPrefixes = () => {
    for (let key in myDictionary){
        for (let ind of myDictionary[key]){
            prefixes[ind] = list[ind].substring(0,prefixes[ind].length+1)
        }
    }
}

//start here
let myDictionary = {}
let list:Array<string> = ['dog','cat','apple','appricot','fish','finish'];
let prefixes = getShortestPrefixes(list);

console.log(prefixes);

prefixes.forEach(getIndexes); // fills up mydictionary with duplicate keys
console.log(myDictionary);
while(Object.keys(myDictionary).length > 0){
    addLettersToPrefixes(); // add additional letters to duplicate key values 
    console.log(prefixes);
    myDictionary = {}
    prefixes.forEach(getIndexes); // refills mydictionary 
    console.log(myDictionary);
}
console.log(prefixes);
