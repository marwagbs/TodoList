const Add = document.querySelector(".add");
const Clear = document.querySelector(".clear");
const Remove = document.querySelector(".remove");

const input = document.getElementById("input");
const listContainer = document.querySelector(".list-container");

function addTask(){
    if (input.value === "") {
      alert("veuillez écrire quelque chose");
    } else {
      let li = document.createElement("li");
      li.innerHTML = input.value;
      listContainer.appendChild(li);
      let span=document.createElement("span");
      span.textContent = "\u00d7"
      li.appendChild(span)
    }


    input.value="";
}

Add.addEventListener("click", addTask);

listContainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")

  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove()

  }
})
