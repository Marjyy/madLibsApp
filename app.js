"use strict"


//Total questions
let numberofquestion = 5;

//Question counter
let questioncounter=0;

//test logic
let solicitation = `Please enter`;
let questionArray =[
`${solicitation} your name`,
`${solicitation} an occupation`,
`${solicitation} a country`,
`${solicitation} a means of transport`,
`${solicitation} your favorite country`,
`${solicitation} your favorite object`,
];

//variable
let userInputs=[];

for (let i=numberofquestion; i>=0; i--) {
    console.log(questionArray[questioncounter] + `...(${numberofquestion} question left)`);
    userInputs.push(prompt(questionArray[questioncounter]+ `...(${numberofquestion} question left)`));
console.log(userInputs);
questioncounter++;
numberofquestion--;
}


//The User Story

let originalStory= `<h2>${userInputs[0]} you decide to leave your job as ${userInputs[1]} and ${userInputs[2]}<\h2>.<h2>You choose to travel by ${userInputs[3]} to the country of your dream: ${userInputs[4]}<\h2>.<h2> You take with you your ${userInputs[5]} to reassure you during the trip<\h2>`;
console.log(originalStory);

//Alert

alert("Well done, you finish the game....Are you ready for your funny story?");

// Print the original Story

console.log(originalStory);
document.write(originalStory);
















//You decide to leave your job as occupation and your country.You choose to travel by meansOfTransportation to the country of your dream: your favorite country. You take with you your favorite object"
