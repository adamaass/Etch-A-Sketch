const container = document.querySelector(".container");

for (x=0; x<256; x++){
let column = document.createElement("div");
column.className = "column";
container.appendChild(column);
}

container.addEventListener("click", ()=> {
 const column = document.querySelector(".column");
 column.className ="black";
  
})

