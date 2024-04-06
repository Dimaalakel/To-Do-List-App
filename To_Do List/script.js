const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");


function AddTask(){
    if (inputBox.value=== ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
    SaveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
},false);

function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

