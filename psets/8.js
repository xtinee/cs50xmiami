/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

verbing('go');
verbing('swim');

function verbing(word) {
  if (word.length >= 3)
  {
    console.log(word + "ing");
    return (word + "ing");
  }

  else
  {
    console.log(word);
    return word;
  }
}
