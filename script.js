const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){ //check if input box is empty
        alert("Can't leave empty"); //trigger alert
    }
    else{
        let li = document.createElement("li"); //create html element with tag name li
        li.innerHTML = inputBox.value; //add text to li (input box)
        listContainer.appendChild(li); //add li element to "list container"

        let span = document.createElement("span"); //create span
        span.innerHTML="\u00d7"; //in the span, create a cross-icon
        li.appendChild(span); //display cross icon 
        }
    inputBox.value=""//reset box
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ //check if li is licked
        e.target.classList.toggle("checked"); //add check class name
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //delete li element
    }
}, false);

//function to save items in browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //save anything in listContainer to storage
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();