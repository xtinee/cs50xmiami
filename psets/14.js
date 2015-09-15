/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

celsiusToFahrenheit(0);
fahrenheitToCelsius(32);


function celsiusToFahrenheit(celsius){
    console.log(celsius + " degrees C is " + ((celsius * 9)/5 + 32) + " degrees F." );
}

function fahrenheitToCelsius(fahrenheit){
    console.log(fahrenheit + " degrees F is " + ((fahrenheit - 32) * 5/9) + " degrees C." );
}
