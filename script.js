const button = document.querySelector("#button");
const input = document.querySelector("#input");
const firstText = document.querySelector("#first-p");
const secondText = document.querySelector("#second-p");

// function inputText() {
//   firstText.textContent = input.value;
// }
//inspect tool
function inspect(event) {
  console.log(event);
}
function addPTags(tags, navn) {
  let node = document.createElement(tags);
  let parent = document.querySelector("div");
  node.textContent = navn;
  parent.appendChild(node);
}

// const changeText = (event) => {
//   if (event.target.nodeName === "P" && input.value !== "") {
//     let temp = document.getElementById(event.target.id);
//     temp.textContent = input.value;
//   }
// };

button.addEventListener("click", inputText);
document.addEventListener("click", changeText);
