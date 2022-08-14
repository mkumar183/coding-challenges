// interface dictionary {
//     key: string,
//     value: {}
// }
// let myDict:dictionary = {
//     key: 'k',
//     value: {}
// };
var myDict = {};
myDict['abc'] = 5;
myDict['cde'] = 10;
myDict['sdf'] = { x: 'a' };
for (var key in myDict) {
    console.log(key, myDict[key]);
}
