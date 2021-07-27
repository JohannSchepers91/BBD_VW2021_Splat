const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart",dragStart);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("drop",drop);
    elem.addEventListener("dragleave", dragLeave);
});

function dragStart(event){
    console.log("Dragging...");
    event.dataTransfer.setData("text", event.target.style.color);
    event.dataTransfer.setData("item", event.target.id);
}

function dragEnter(event){
    event.target.classList.add("droppable-hover");
}

function dragOver(event){
    event.preventDefault();
    
}

function dragLeave(event){
    event.target.classList.remove("droppable-hover");
}

function drop(event){
    event.preventDefault();
    
    event.target.innerHTML = "Change text";
    const draggableElementData = event.dataTransfer.getData("text");
    event.target.style.backgroundColor = draggableElementData;
    event.target.setData("text", event.dataTransfer.getData);
    //event.target.setData("item", event.dataTransfer.getData);
    //event.target.innerHTML = "CHANGE!";
    
}