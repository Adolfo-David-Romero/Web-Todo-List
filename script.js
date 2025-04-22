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
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        }
    inputBox.value=""//reset box
}
