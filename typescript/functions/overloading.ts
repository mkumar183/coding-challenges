// function doubleMe(x: number); //by adding these 2 lines doubleMe is restricted to number and string
// function doubleMe(x: string);

function doubleMe(x: any){
    if (x&& typeof x === "number"){
        console.log(x*2)
    } else if (x&& typeof x === "string"){
        console.log(x + " " + x);
    }
}

doubleMe(5);
doubleMe("ABC");

// comment out line 1-2 and then check no error on below method but if not there is an error
// doubleMe(true);