var myInput = document.getElementById("input"),

    myDiv = document.getElementById("div"),

    myButton = document.getElementById("button");

    // Element.Event = function () { // Code}

myButton.onclick = function () {
    /*
    console.log(myInput);
    console.log(myDiv);
    */
    /*function calcUsd() {*/

    "use strict";
    myDiv.innerHTML = myInput.value * 3.75;

};