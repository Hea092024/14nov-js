const button = document.querySelector("button");
const input = document.querySelector("#input");
const firsText = document.querySelector("#first-p");
const secondText = document.querySelector("#second-p");

function inputText(){
    firsText.innerHTML=input.value;
}
button.addEventListener("click",inputText);
