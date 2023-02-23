const myList = document.getElementById("myList");
const items = myList.getElementsByTagName("li");

function changeColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  this.style.color = "#" + randomColor;
}

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", changeColor);
}


