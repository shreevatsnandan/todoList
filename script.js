const textBox = document.getElementById("textBox");
const toDoCont = document.getElementById("toDoCont");

function add(){
    if(textBox.value === ''){ 
        alert("add something");

    }
    else{
        const li = document.createElement("li");
        li.textContent = textBox.value;
    document.getElementById("toDoCont").appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    textBox.value = "";
}

toDoCont.addEventListener("click", function(o){
    if(o.target.tagName==="LI"){
        o.target.classList.toggle("checked");
    }
    else if(o.target.tagName === "SPAN"){
        o.target.parentElement.remove();
    }
}, false);