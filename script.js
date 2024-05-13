// Declare your arrays here
let Chips=["l.jpg", "ruffles.jpg", "hotfries.jpg"];
let Candy=["kk.jpg", "ab.jpg", "t.jpg"];
let Beverage=["water.jpg", "ga.jpg", "sl.jpg"];

let choices


// Make sure to declare your HTML elements as variables! 


// Submit Button 
let submitButton = document.querySelector(".submit");
let input = document.querySelector("input");
let suggestions=document.querySelector(".suggestions");

submitButton.addEventListener("click", function()  {

    choices =input.value;


if (choices==="Chips")
    {choices=Chips;}

else if (choices==="Candy")
    {choices=Candy;}

else if (choices==="Beverage")
    {choices=Beverage;}




choices.forEach(function(choice){
    let picture=document.createElement("img");
    console.log(picture);
    picture.src=choice;
    suggestions.appendChild(picture);
    });
    
});


