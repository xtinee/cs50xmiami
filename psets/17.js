/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...

pluralize("cat", 4);
pluralize("dog", 5);
pluralize("rat", 6);
pluralize("sheep", 2);
pluralize("geese", 8);

function pluralize(noun, number){

    if(noun == "sheep" || noun == "geese"){
        console.log(number + " " + noun);
    }

    else
    {
        console.log(number + " " + noun + "s");
        return number + " " + noun + "s";
    }
}