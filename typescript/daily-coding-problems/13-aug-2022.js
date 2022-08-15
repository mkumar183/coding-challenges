/**
 * Given a string and a set of delimiters, reverse the words in the string while maintaining the
 * relative order of the delimiters. For example, given "hello/world:here", return "here/world:hello"
 * Follow-up: Does your solution work for the following cases: "hello/world:here/", "hello//world:here"
 */
var getWordsInString = function (input, delimiters) {
    var re = new RegExp(delimiters);
    console.log(input.match(re));
    return ['abc', 'cde'];
};
var main_13_09_2022 = function () {
    var input = "hello/world:here/";
    var words = getWordsInString(input, "/:,");
};
main_13_09_2022();
