var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var results = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        results *= nums[i];
    }
    return results;
};
console.log(product(1, 2, 3));
