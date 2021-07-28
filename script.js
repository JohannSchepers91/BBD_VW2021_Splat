var changeTo;

function dropDownClick(){

    document.getElementById("right").onclick = change();

    document.getElementById("left").onclick = change();
}

function change(){
if (document.id = "right"){
    document.getElementsByClassName("turnBTN").innerHTML = "Turn right";
}
if (document.id = "left"){
    document.getElementsByClassName("turnBTN").innerHTML = "Turn left";
}
}