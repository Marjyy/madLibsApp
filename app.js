let originalStory="You decide to leave your job as occupation and your country.You choose to travel by meansOfTransportation to the country of your dream: your favorite country. You take with you your favorite object";

var yourName=prompt("Enter your name: ");
var occupation=prompt("Enter an occupation: ");
var country=prompt("Enter a country: ");
var meansOfTransportation=prompt("Enter a means of transportation: ");
var favoriteCountry=prompt("Enter the name of your favorite country: ");
var favoriteObject=prompt("Enter the name of your favorite object: ");



let userInputs=[yourName,occupation,country,meansOfTransportation,favoriteCountry,favoriteObject];
let userStory= (`${userInputs[0]} decide to leave your job as ${userInputs[1]} and ${userInputs[2]}. You choose to travel by ${userInputs[3]} to the country of your dream: ${userInputs[4]}. You take with you ${userInputs[5]}`);



let numberofquestion = 6;



document.write(userStory);





//You decide to leave your job as occupation and your country.You choose to travel by meansOfTransportation to the country of your dream: your favorite country. You take with you your favorite object"
