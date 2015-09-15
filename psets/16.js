/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...

helloWorld("es");
helloWorld("fr");
helloWorld("bp");
helloWorld("z");

function helloWorld(language){

  switch(language) {
    case "es":
      console.log("Hola, mundo");
      return "Hola, mundo.";
      break;

    case "fr":
      console.log("Bonjour, le monde");
      return "Bonjour, le monde.";
      break;

    case "bp":
      console.log("Ola, mundo");
      return "Ola, mundo.";
      break;

    default:
      console.log("Hello, world");
      return "Hello, world.";
  }
  }