var a = [[1, 3, 7, 10, 15, 20],
    [2, 6, 9, 14, 22, 25],
    [3, 8, 10, 15, 25, 30],
    [10, 11, 12, 23, 30, 35],
    [20, 25, 30, 35, 40, 45]];
var i1 = 1;
var j1 = 1;
var i2 = 3;
var j2 = 3;
//  console.log(a[i1][j1]);
//  console.log(a[i2][j2]);
var cols = a[0].length; // number of columns
var rows = a.length; // number of rows
//  console.log(rows, cols);
var out = [];
var itr = 0;
for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
        console.log(i, j);
        itr += 1;
        if (a[i][j] > a[i1][j1]) {
            j = cols;
        }
        a[i][j] < a[i1][j1] || a[i][j] > a[i2][j2] ? out.push(a[i][j]) : null;
    }
}
console.log(out);
console.log(out.length);
console.log(itr);
