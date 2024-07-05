let mainContainerEl =document.getElementById("mainContainer");
mainContainerEl.classList.add("text-center","m-5");


function onStausChange(){
    labelEl.classList.toggle("checked");

}

let inputEl = document.createElement("input");
inputEl.type="checkbox";
inputEl.id="mycheckBox";
inputEl.onclick = function(){
    onStausChange() 
}
mainContainerEl.appendChild(inputEl);



let labelEl = document.createElement("label");
labelEl.setAttribute("for","mycheckBox");
labelEl.textContent = "click here";
labelEl.classList.add("ml-4")
mainContainerEl.appendChild(labelEl);