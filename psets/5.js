/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

drEvil(100);
drEvil(1000000);

function drEvil(amount) {
  if (amount == 1000000)
  {
    console.log(amount + " dollars (pinky)");
    return (amount + " dollars (pinky)");
  }

  else
  {
    console.log(amount + " dollars");
    return amount + " dollars";
  }
}
