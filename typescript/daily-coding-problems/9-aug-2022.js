/**
 * Given a list of words, return the shortest unique prefix of each word. For example, given the list:
 * dog
 * cat
 * apple
 * apricot
 * fish
 * Return the list:
 * d
 * c
 * app
 * apr
 * f
 * */
var getShortestPrefixes = function (list) {
    var prefixes = [];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        prefixes.push(item.substring(0, 1));
    }
    return prefixes;
};
var getIndexes = function (elem, index, list) {
    var ind = 0;
    var returnValue = [];
    ind = list.indexOf(elem);
    while (ind != -1) {
        returnValue.push(ind);
        ind = list.indexOf(elem, ind + 1);
    }
    if (returnValue.length > 1) {
        myDictionary[elem] = returnValue;
    }
};
var addLettersToPrefixes = function () {
    for (var key in myDictionary) {
        for (var _i = 0, _a = myDictionary[key]; _i < _a.length; _i++) {
            var ind = _a[_i];
            prefixes[ind] = list[ind].substring(0, prefixes[ind].length + 1);
        }
    }
};
//start here
var myDictionary = {};
var list = ['dog', 'cat', 'apple', 'appricot', 'fish', 'finish'];
var prefixes = getShortestPrefixes(list);
console.log(prefixes);
prefixes.forEach(getIndexes); // fills up mydictionary with duplicate keys
console.log(myDictionary);
while (Object.keys(myDictionary).length > 0) {
    addLettersToPrefixes(); // add additional letters to duplicate key values 
    console.log(prefixes);
    myDictionary = {};
    prefixes.forEach(getIndexes); // refills mydictionary 
    console.log(myDictionary);
}
console.log(prefixes);
