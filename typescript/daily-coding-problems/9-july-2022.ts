var a:Array<Array<number>> = [[1, 3, 7, 10, 15, 20],
 [2, 6, 9, 14, 22, 25],
 [3, 8, 10, 15, 25, 30],
 [10, 11, 12, 23, 30, 35],
 [20, 25, 30, 35, 40, 45]]

 
 var i1:number = 1
 var j1:number = 1
 var i2:number = 3
 var j2:number = 3

//  console.log(a[i1][j1]);
//  console.log(a[i2][j2]);
 let cols:number = a[0].length; // number of columns
 let rows:number = a.length; // number of rows
//  console.log(rows, cols);

 let out:Array<number> = []
 let itr:number = 0
 for (let i:number = 0; i < rows; i++) {
    for (let j:number = 0; j < cols; j++){
        console.log(i,j);
        itr += 1;
        a[i][j] < a[i1][j1]  || a[i][j] > a[i2][j2] ? out.push(a[i][j]) : null;
    }
 }
 console.log(out);
 console.log(out.length);
 console.log(itr);