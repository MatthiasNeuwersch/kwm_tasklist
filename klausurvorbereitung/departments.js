"use strict";

class Department{
    constructor(number, name){
        this.number = number;
        this.name = name;
        this.isFull = false;
        this.subDepartments = [];
        this.tasks = [];
        this.projects = [];
    }

    addSubDepartment(department){
        for(const subDepartment of this.subDepartments){
            if(subDepartment.name === department.name)
                return false;
        }
        this.subDepartments.push(department);
    }

    printTaskList(){
        let taskUL = document.createElement("ul");
        taskUL.innerText = "Tasklist for department "+this.name;
        for(const task of this.tasks){
            let taskLI  = document.createElement("li");
            taskLI.innerText = task.name;
            taskUL.append(taskLI);
        }
        return taskUL;
    }
}

class Task{
    constructor(number, title, duedate){
        this.number = number;
        this.title = title;
        this.duedate = duedate;
        this.done = false;
    }

    setFinished(){
        this.done = true;
    }
}

class Project{
    constructor(number, title, duedate, manager, budget){
        this.number = number;
        this.title = title;
        this.duedate = duedate;
        this.manager = manager;
        this.budget = budget;
        this.subProjects = [];
        this.tasks = [];

        this.done = false;
    }

    add(something){
        let today = new Date();
        if(something.duedate < today)
            return false;
    }

    setFinished(){
        for(const task of this.tasks){
            if(!task.done)
                return false;
        }
        for(const subProject of this.subProjects){
            if(!subProject.setFinished())
                return false;
        }

        this.done = true;
    }

}