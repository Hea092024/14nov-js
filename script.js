const button = document.querySelector("button");
const input = document.querySelector("#input");
const firsText = document.querySelector("#first-p");
const secondText = document.querySelector("#second-p");

function inputText(){
    firsText.innerHTML=input.value;
}
function inspect (event){
    console.log(event.target.id);

}
button.addEventListener("click",inputText);
document.addEventListener("click",inspect);