var product = function(...nums:Array<number>){ // rest param should be last param in fn
    var results = 1;
    for (var i =0; i<nums.length; i++){
        console.log(nums[i])
        results*= nums[i]
    }
    return results;
}

console.log(product(1,2,3));