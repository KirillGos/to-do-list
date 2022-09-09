import './style/main.css';
// import {  } from '../src/modules/task'
import { 
    showProjectNameForm,
    addProject,
    projectCancel,
    displayProject,
    bubling,
    folderClick
} from '../src/modules/project';

import {
    displayForm,
    displayTask, 
    cancelTask,
  

} from '../src/modules/task';

export const domObj = {
    buttons: {
        // sidebar buttons
        addFolderBtn: document.querySelector('.add-a-folder-sec'),
        projectAddBtn: document.querySelector('.project-add-btn'),
        projectCancelBtn: document.querySelector('.project-cancel-btn'),
        // task buttons
        addTaskBtn: document.querySelector('.submit-task'),
        cancelTaskBtn: document.querySelector('.cancel-task'),
        deleteTaskBtn: document.querySelector('.delete-task-btn'),
        bringTaskAddFormBtn: document.querySelector('.add-task-btn'),
    },
    inputs: {
        // sidebar inputs
        projectNameInput: document.querySelector('.project-name-input'),
        // task inputs
    },
    elements: {
        projectNameForm: document.querySelector('.project-name'),
        allProjects: Array.from(document.querySelectorAll('.project')),
        projectsFolder: document.querySelector('.to-do-list-sec'),
        addTaskForm: document.querySelector('.add-task-form'),
        tasks: document.querySelector('.tasks'), 
        folderName: document.querySelector('.folder-name'),
    },
    events: function addEvents() {
        domObj.buttons.addFolderBtn.addEventListener('click', showProjectNameForm);
        domObj.buttons.projectAddBtn.addEventListener('click', addProject);
        domObj.buttons.projectCancelBtn.addEventListener('click', projectCancel);

        domObj.buttons.bringTaskAddFormBtn.addEventListener('click', displayForm);
        domObj.buttons.addTaskBtn.addEventListener('click', displayTask);
        domObj.buttons.cancelTaskBtn.addEventListener('click', cancelTask);
    }
}

export const projects = [ {
    name: "Demo"
}];


domObj.events();
displayProject();
// bubling()