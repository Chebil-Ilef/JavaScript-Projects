 let pname=document.querySelector("#name")
 let content=document.querySelector("#content")
 let boutton=document.querySelector("#button")
 let toDoList=document.querySelector(".list-group")
 
 boutton.addEventListener("click",()=>{ 
     if(pname.value!="" && content.value!=""){
         toDoList.innerHTML += '<li class="list-group-item">'+pname.value+ ' : ' + content.value +'<img src="trash (1).png" class="trash" alt="trash kifi"> '+'</li>';
         pname.value=""
         content.value=""
     } else {
         alert("Insert something")
     }
 });
 
 toDoList.addEventListener("click", (event) => {
     if (event.target.classList.contains("trash")) {
         event.target.parentElement.remove();
     }
 });
 /*we use the parentNode property to get the parent of the clicked element (which is the todo item itself).
 We then use the removeChild method to remove this element from the parent.*/

