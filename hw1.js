/*
    Name: Chelsa Jons
    Data created: June 6, 2025
    Data last edited: June 7, 2025
    Version:1.0
    Description: Homework 1 JS Patient Information Form
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
