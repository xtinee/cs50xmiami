/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...

greaterNum (1,2);
greaterNum (5,4);
greaterNum (1,1);

function greaterNum(x, y){

    if(x > y){
        console.log(x);
        return x;
    }

    else if(y >x){
        console.log(y);
        return y;
    }

    else{
        console.log("The numbers are equal.");
    }
}
