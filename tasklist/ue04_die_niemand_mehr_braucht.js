'use strict';

window.onload = function () {
    document.getElementById("add").addEventListener("click", addTask);
    // document.getElementById("showOpen").addEventListener("click", showOpen);
    // document.getElementById("showAll").addEventListener("click", showAll);
    // document.getElementById("removeClosed").addEventListener("click", removeClosed);
    // document.getElementById("filterByPerson").addEventListener("click", filterByPerson);
}
// function checkTask(e){
//     const task = e.target.closest(".task");
//     if(e.target.checked)
//         task.classList.add("done");
//     else
//         task.classList.remove("done");
// }
function addTask(e) {
    e.preventDefault();

    const title = document.getElementById("title")
    const person = document.querySelector("input[name='person']");
    const description = document.getElementsByTagName("textarea")[0];

    tasks_container.append(createTaskElement(title, person, description));
    addNewPersonToSelectbox(person);
    clearInputs(title, person, description);
}

function createTaskElement(title, person, description){
    const task = document.createElement("template");
    task.innerHTML = "<div class='task' data-owner='"+person.value+"'>" +
        "<div class='checkbox_container'>" +
            "<label>Erledigt<input type='checkbox' name='status'></label>"+
        "</div>" +
        "<div class='taskcontent_container'>" +
            "<div class='task_meta'>"+
                "<span class='task_title'>"+title.value+"</span>" +
                "<span class='task_owner'>Owner: "+person.value+"</span>" +
            "</div>" +
            "<p class='task_description'>"+description.value+"</p>" +
            "</div>"+
        "</div>";
    return task.content.firstChild;
}

//Bonus: Append Option to Selectbox.
function addNewPersonToSelectbox(person){
    const options = document.querySelectorAll("#filterByPersonSelector option");
    for(const option of options){
        if(option.value==person.value)
            return;
    }

    const newOption = document.createElement("option");
    newOption.value = person.value;
    newOption.innerText = person.value;
    document.getElementById("filterByPersonSelector").append(newOption);
}

//Clear inputs
function clearInputs(title, person, description){
    title.value = "";
    person.value = "";
    description.value = "";
}



// function showOpen() {
//     const tasks = document.getElementsByClassName("task");
//     for(const task of tasks){
//         if(task.classList.contains("done"))
//             task.classList.add("hidden");
//     }
// }

// function showAll() {
//     const tasks = document.getElementsByClassName("task");
//     for(const task of tasks)
//         task.classList.remove("hidden");
// }

// function removeClosed() {
//     //Show Problem with const of
//     const tasks = document.getElementsByClassName("task");
//     for(let i = 0; i < tasks.length; i++){
//         if(tasks[i].classList.contains("done")){
//             tasks[i].remove();
//             i--;
//         }
//     }
//
//     //TODO: Remove person from optionlist, if this was its last Task.
// }

// function filterByPerson(){
//     const person = document.getElementById("filterByPersonSelector").value;
//     const tasks = document.getElementsByClassName("task");
//     for(const task of tasks) {
//         if (task.dataset.owner == person)
//             task.classList.remove("hidden");
//         else
//             task.classList.add("hidden");
//     }
// }