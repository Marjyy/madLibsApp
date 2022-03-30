"use strict"

//original Story

let originalStory="You decide to leave your job as occupation and your country.You choose to travel by meansOfTransportation to the country of your dream: your favorite country. You take with you your favorite object";

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




















//You decide to leave your job as occupation and your country.You choose to travel by meansOfTransportation to the country of your dream: your favorite country. You take with you your favorite object"
