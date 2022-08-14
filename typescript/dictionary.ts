let myDict = {};

myDict['abc'] = 5;
myDict['cde'] = 10;
myDict['sdf'] = {x: 'a'};

for (let key in myDict){
    console.log(key, myDict[key]);
}

