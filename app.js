var btnTranslate =document.querySelector("btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


console.log(txtInput)

function clickEventHandler (){
    // console.log("clicked!");
    // to read value --> .value
    // console.log("input", txtInput.value);
    outputDiv.innerText =" "
};

// click is predefined
btnTranslate.addEventListener ("click", clickEventHandler)

