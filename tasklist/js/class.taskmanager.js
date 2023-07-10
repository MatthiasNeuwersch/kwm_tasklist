"use strict";
import Task from "./class.task.js";
import Person from "./class.person.js";

export default class TaskManager{
    constructor(){
        this.tasks = [];
        this.ongoingTaskId = 0;
    }

    addTask(name, description, owner){
        let task = new Task(this.ongoingTaskId, name, description, owner);
        this.tasks.push(task);
        this.ongoingTaskId++;
        let self = this;
        document.getElementById("tasks_container").append(task.generateMarkup());
        task.markup.querySelector("button").addEventListener("click", function(){
            task.addSubTask( new Task(self.ongoingTaskId, name, description, owner));
            self.ongoingTaskId++;
        });

    }

    removeTask(id){
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id == id){
                this.tasks[i].markup.remove(); // TODO: Prüfen.
                this.tasks.splice(i,1);
            }
        }
    }


    addEventListeners(){
        const addButton = document.getElementById("add")
        let self = this;

        addButton.addEventListener("click", function(e){
            e.preventDefault();
            const title = document.getElementById("title").value;
            const person = document.querySelector("input[name='person']").value;
            const description = document.getElementsByTagName("textarea")[0].value;
            self.addTask(title, description, new Person(person));
        });
    }
}