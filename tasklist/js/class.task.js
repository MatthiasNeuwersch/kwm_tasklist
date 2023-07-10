"use strict";

export default class Task{
    constructor(id, name, description, owner){
        this.id = id;
        this.name = name;
        this.description = description;
        this.owner = owner;
        this.done = false;
        this.subtasks = [];
        this.markup;
    }

    generateMarkup(){
        const task = document.createElement("template");
        task.innerHTML = "<div class='task' data-owner='"+this.owner.name+"'>" +
            "<div class='checkbox_container'>" +
                "<label>Erledigt<input type='checkbox' "+ (this.done ? "checked='checked'" : "")+
                " name='status'></label>"+
            "</div>" +
            "<div class='taskcontent_container'>" +
            "<div class='task_meta'>"+
                "<span class='task_title'>"+this.name+"</span>" +
                "<span class='task_owner'>Owner: "+this.owner.name+"</span>" +
            "</div>" +
            "<p class='task_description'>"+this.description+"</p>" +
            "</div>"+
            "<button class='addSubtask'>Hinzufügen</button>" +
        "</div>";
        this.markup = task.content.firstChild;
        return this.markup;
    }

    addSubTask(task){
        this.subtasks.push(task);
    }

    finish(){
        //check for dependent tasks
        for(const subtask of this.subtasks){
            if(!subtask.done)
                return;
        }

        this.done = true;
        this.markup.querySelector("input[type='checkbox']").setAttribute("checked"); //TODO: Prüfen.
    }

}