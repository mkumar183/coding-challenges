interface IPoint {
    x:number,
    y:number
}

// functions code starts here 
let getDistance = (point1:IPoint, point2:IPoint):number => {
    return Math.sqrt((point1.x - point2.x)**2 + (point1.y - point2.y)**2);
}

let getKMin = (list:Array<number>, k:number):Array<number> => {
    let index:Array<number> = [];
    for (let i = 0; i<k ; i++) {
        const min = Math.min(...list);
        let ind:number = list.indexOf(min)
        index.push(ind);
        list[ind] = 999999999999999; // TODO: adding a large number to not lose index
        console.log(list);
    }
    return index;
}

let getKNearestPoints = (points:Array<IPoint>, k:number, centralPoint:IPoint):Array<IPoint> => {
    let distances:Array<number> = [];

    for(let point of points){
        distances.push(getDistance(point,centralPoint));
    }

    console.log(distances);
    let returnIndexes:Array<number> = getKMin(distances, k);
    console.log(returnIndexes);

    let returnPoints:Array<IPoint> = [];    
    for (let i=0;i<k;i++){
        returnPoints.push(points[returnIndexes[i]]);
    }
    return returnPoints;
} 

let main = () => {
    let p1:IPoint = {
        x: 0,
        y: 0    
    } 
    
    let p2:IPoint = {
        x: 1,
        y: 2    
    } 
    
    let p3:IPoint = {
        x: 3,
        y: 2    
    } 
    
    let points:Array<IPoint> = [p1,p2,p3];
    
    let centerPoint = {
        x:1,
        y:2
    }
    
    let k = 1;
    console.log(getKNearestPoints(points, k, centerPoint));
}
main();