"use strict";
import TaskManager from "./class.taskmanager.js";

const taskmanager = new TaskManager();
taskmanager.addEventListeners();


window.taskmanager = taskmanager;