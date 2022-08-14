//inputs
// functions code starts here 
var getDistance = function (point1, point2) {
    return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
};
var getKMin = function (list, k) {
    var index = [];
    for (var i = 0; i < k; i++) {
        var min = Math.min.apply(Math, list);
        var ind = list.indexOf(min);
        index.push(ind);
        list[ind] = 999999999999999; // adding a large number to not lose index
        console.log(list);
    }
    return index;
};
var getKNearestPoints = function (points, k, centralPoint) {
    var distances = [];
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var point = points_1[_i];
        distances.push(getDistance(point, centralPoint));
    }
    console.log(distances);
    var returnIndexes = getKMin(distances, k);
    console.log(returnIndexes);
    var returnPoints = [];
    for (var i = 0; i < k; i++) {
        returnPoints.push(points[returnIndexes[i]]);
    }
    return returnPoints;
};
var main = function () {
    var p1 = {
        x: 0,
        y: 0
    };
    var p2 = {
        x: 1,
        y: 2
    };
    var p3 = {
        x: 3,
        y: 2
    };
    var points = [p1, p2, p3];
    var centerPoint = {
        x: 1,
        y: 2
    };
    var k = 1;
    console.log(getKNearestPoints(points, k, centerPoint));
};
// console.log(getDistance(p1, p2));
main();
