/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

fixStart('babble');

function fixStart(s) {

    console.log(s.charAt(0));
    for(var i=1; i < s.length; i++)
    {
        if(s.charAt(i) == s.charAt(0))
        {
            console.log('*');
        }

        else
        {
            console.log(s.charAt(i));
        }
    }
}
