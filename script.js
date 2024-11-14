const button = document.querySelector("#button");
const input = document.querySelector("#input");
const firstText = document.querySelector("#first-p");
const secondText = document.querySelector("#seconhd-p");

// function inputText() {
//   firstText.textContent = input.value;
// }
//inspect tool
function inspect(event) {
  console.log(event.target.id);
}
function addPTags(tags, id, navn) {
  let node = document.createElement(tags);
  let parent = document.querySelector("div");
  node.textContent = navn;
  node.id = id;

  parent.appendChild(node);
}

const changeText = (event) => {
  if (event.target.nodeName === "P" && input.value !== "") {
    let temp = document.getElementById(event.target.id);
    temp.textContent = input.value;
  }
};
()=>{}
document.addEventListener("click",changeText);
