import './style/main.css';
// import { displayForm, createTask } from '../src/modules/task'
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
    }
}

const projects = [ {
    name: "Demo"
}];

class createProject {
    constructor(name) {
        this.name = name;
    }
}

function showProjectNameForm() {
        let allProjects =  Array.from(document.querySelectorAll('.project'));
        // hide other projects
        allProjects.map(item => {
            item.classList.add('hidden');
        });
        domObj.buttons.addFolderBtn.classList.add('hidden');
        domObj.inputs.projectNameInput.value = '';
        // show the menu    
        domObj.elements.projectNameForm.classList.remove('hidden');
}

function addProject() {
    let projectName =  document.querySelector('.project-name-input').value;
    if(projectName !== undefined && projectName !== '') {
        const newProject = new createProject(projectName);
        projects.push(newProject);
        displayProject();
    } else {
        alert('Project name can\'t be empty');
    }
   
}

function displayProject() {
    // clear the folder
    domObj.elements.projectsFolder.innerText = '';
    // loop through the projects array and display projects
    for(let i = 0; i < projects.length; i++) {
        
        const project = document.createElement('div');
        project.classList.add('folder');
        project.classList.add('project');
        project.setAttribute('data-index', i);
        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', "../src/assets/to-do-icon.svg");

        const projectText = document.createElement('p');
        projectText.innerText = projects[i].name;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-project');
        deleteBtn.innerText = 'x';
        deleteBtn.addEventListener('click', deleteProject);
        project.appendChild(logoImg);
        project.appendChild(projectText);
        project.appendChild(deleteBtn);

        // project.addEventListener('click', displayTask)
        domObj.elements.projectsFolder.appendChild(project);   
    }
    // display projects and hide the project name form
    domObj.elements.allProjects.map(item => {
        item.classList.remove('hidden');
    });
    domObj.buttons.addFolderBtn.classList.remove('hidden');
    domObj.elements.projectNameForm.classList.add('hidden');
}
displayProject();

function deleteProject(e) {
   let index = e.target.parentElement.dataset.index;
   projects.splice(index, 1);
   displayProject();
   let allProjects = Array.from(document.querySelectorAll('.project'));
    for(let a = 0; a < projects.length; a++) {
        allProjects[a].setAttribute('data-index', a);
    }
}

function projectCancel() {
    domObj.buttons.addFolderBtn.classList.remove('hidden');
    domObj.elements.projectNameForm.classList.add('hidden');
    Array.from(document.querySelectorAll('.project')).map(item => {
        item.classList.remove('hidden');
    });
}
domObj.buttons.addFolderBtn.addEventListener('click', showProjectNameForm);
domObj.buttons.projectAddBtn.addEventListener('click', addProject);
 domObj.buttons.projectCancelBtn.addEventListener('click', projectCancel);

 domObj.buttons.bringTaskAddFormBtn.addEventListener('click', displayForm);
domObj.buttons.addTaskBtn.addEventListener('click', displayTask)
 

export function displayForm() {
        domObj.elements.addTaskForm.classList.remove('hidden');
}
export function createTaskProperties(title, date) {
        return { title, date }
}

export  function createTask(index) {
    if(document.querySelector('.task-name').value !== '' && document.querySelector('.task-date').value !== '') {
        let taskTitle = document.querySelector('.task-name').value;
        console.log(index)
        let taskDate = document.querySelector('.task-date').value; 
        let task = createTaskProperties(taskTitle, taskDate);
        projects[index].tasks = task;
    } else {
        alert('You Must fill the inputs')
    }
    
}

export function displayTask(e) {
   
    let index = e.target.dataset.index;
     createTask(index);

     domObj.elements.tasks.innerText = '';
    console.log(currentFolder)
            const task = document.createElement('div');
            task.classList.add('task');

            const title = document.createElement('p');
            title.classList.add('title-task');
            // title.innerText = projects[i].title;

            const date = document.createElement('input');
            date.classList.add('task-date');
            // date.value = projects[i].date;

            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.classList.add('.delete-task-btn');
            deleteTaskBtn.innerText = 'X';
            

            task.appendChild(deleteTaskBtn);

    };
