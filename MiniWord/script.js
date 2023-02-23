
let a =document.querySelector("#text");
let b=document.querySelector("#color");
let c=document.querySelector("#size");
let d=document.querySelector("#font");

b.addEventListener("input",function(event){
    a.style.color=event.target.value;
});

c.addEventListener("change",function(event){
 a.style.fontSize=event.target.value +'px';
});

d.addEventListener("change",function(event){
    a.style.fontFamily=event.target.value;
});

/*made it only take alphanumeric characters and space.*/
let sentence = "";
document.addEventListener("keydown", function (event) {
  let key = event.key;
  if (/^[a-zA-Z0-9]$/.test(key)) {
    sentence += key;
    a.innerHTML = sentence;
  } else if (key === " ") {
    sentence += " "; // add a space character to the sentence
    a.innerHTML = sentence;
  }
  event.preventDefault();
});
