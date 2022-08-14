/**
 * Given a list of words, return the shortest unique prefix of each word. For example, given the list:
 * dog, cat, apple, apricot, fish
 * Return the list:
 * d, c, app, apr, f
 * */
var getShortestPrefixes = function (list) {
    var prefixes = [];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        prefixes.push(item.substring(0, 1));
    }
    return prefixes;
};
var addLettersToPrefixes = function (prefixes, list, myDictionary) {
    for (var key in myDictionary) {
        for (var _i = 0, _a = myDictionary[key]; _i < _a.length; _i++) {
            var ind = _a[_i];
            prefixes[ind] = list[ind].substring(0, prefixes[ind].length + 1);
        }
    }
};
var getIndexes = function (list) {
    var ind = 0;
    var indexes = {};
    for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
        var elem = list_2[_i];
        ind = list.indexOf(elem);
        var returnValue = [];
        while (ind != -1) {
            returnValue.push(ind);
            ind = list.indexOf(elem, ind + 1);
        }
        if (returnValue.length > 1) {
            indexes[elem] = returnValue;
        }
    }
    return indexes;
};
var main_09_09_2022 = function () {
    var input = ['dog', 'cat', 'apple', 'appricot', 'fish', 'finish'];
    var output = getShortestPrefixes(input);
    var indexes = getIndexes(output);
    while (Object.keys(indexes).length > 0) {
        addLettersToPrefixes(output, input, indexes); // add additional letters to duplicate key values 
        indexes = getIndexes(output);
    }
    console.log(output);
};
main_09_09_2022();
