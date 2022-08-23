/**A Boolean formula can be said to be satisfiable if there is a way to assign truth values to each variable such that the entire formula evaluates to true.
For example, suppose we have the following formula, where the symbol ¬ is used to denote negation:
(¬c OR b) AND (b OR c) AND (¬b OR c) AND (¬c OR ¬a)
One way to satisfy this formula would be to let a = False, b = True, and c = True.
This type of formula, with AND statements joining tuples containing exactly one OR, is known as 2-CNF.
Given a 2-CNF formula, find a way to assign truth values to satisfy it, or return False if this is impossible.
 */
;
var getCombinations = function (count) {
    // let output = new Array(2**(count)).fill(0).map(() => new Array(count).fill(0));
    var output = [];
    for (var i = 0; i < Math.pow(2, (count)); i++) {
        output.push((i >>> 0).toString(2).padStart(count, '0'));
    }
    return output;
};
var getDistinctVars = function (input) {
    var returnArray = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var elem = input_1[_i];
        returnArray.push(elem.x.length === 2 ? elem.x[1] : elem.x[0]);
        returnArray.push(elem.y.length === 2 ? elem.y[1] : elem.y[0]);
    }
    var returnSet = new Set(returnArray);
    returnArray = Array.from(returnSet);
    return returnArray;
};
var evalInput = function (input, comb, distinctVars) {
    var output = true;
    var dict = {};
    // console.log(distinctVars);
    // console.log('comb', comb);  // 001
    for (var i = 0; i < distinctVars.length; i++) {
        dict[distinctVars[i]] = comb[i];
    }
    for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
        var elem = input_2[_i];
        // console.log('elem', elem);  // !a OR b 
        var expression = true;
        // console.log(elem.x, elem.y);
        // console.log(dict)
        if (elem.x.length === 2) {
            expression = expression && dict[elem['x'][1]] === '1' ? false : true;
        }
        else {
            expression = expression && dict[elem['x'][0]] === '1' ? true : false;
        }
        // console.log('expression', expression)
        if (elem.y.length === 2) {
            expression = expression || dict[elem['y'][1]] === '1' ? false : true;
        }
        else {
            expression = expression || dict[elem['y'][0]] === '1' ? true : false;
        }
        // console.log('final expression', expression)
        output = output && expression;
    }
    // console.log('output', output);
    return output;
};
var main_688 = function () {
    var input = [];
    var t1 = {
        x: '!c',
        y: 'b'
    };
    var t2 = {
        x: 'b',
        y: 'c'
    };
    var t3 = {
        x: '!b',
        y: 'c'
    };
    var t4 = {
        x: '!c',
        y: '!a'
    };
    input = [t1, t2, t3, t4];
    console.log(input);
    var distinctVars = getDistinctVars(input);
    console.log(distinctVars);
    var allCombinations = getCombinations(distinctVars.length);
    for (var _i = 0, allCombinations_1 = allCombinations; _i < allCombinations_1.length; _i++) {
        var sample = allCombinations_1[_i];
        evalInput(input, sample, distinctVars) ? console.log(sample) : undefined;
    }
};
main_688();
