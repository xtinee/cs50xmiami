/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

calculateAge(1987, 2015);
calculateAge(1988, 2015);
calculateAge(1989, 2015);

function calculateAge(birthYear, currentYear){

    console.log ("You are either " + (currentYear - birthYear - 1) + " or " + (currentYear - birthYear) + ".");
}