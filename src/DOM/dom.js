import { task } from '../task'

export const domObj = {
    display: document.querySelector('.display'),
    inbox: document.querySelector('.inbox'),
    today: document.querySelector('.today'),
    week: document.querySelector('.week'),
    cancelProject: document.querySelector('.cancel-project'),
    addProject: document.querySelector('.add-a-folder-sec'),
    addProjectForm: document.querySelector('.project-name'),
    addProjectCancelBtn: document.querySelector('.project-cancel-btn'),
    addProjectAddBtn: document.querySelector('.project-add-btn'),
    projectNameInput: document.querySelector('.project-name-input'),
    projects: document.querySelector('.projects'),
    projectsSec: document.querySelector('.to-do-list-sec'),
    project: Array.from(document.querySelectorAll('.project')),
    taskTitle: document.querySelector('.task-title-input'),
    taskDescription: document.querySelector('#description-input'),
    taskDueDate: document.querySelector('.due-date-input'),
    taskAdd: document.querySelector('.project-submit'),
}
export function createTaskObject() {
    this.title = domObj.taskTitle.value;
    this.description = domObj.taskDescription.value;
    this.dueDate = domObj.taskDueDate.value;
    console.log(this)
}

export function addEvent(element, event, action) {
    return element.addEventListener(event, action);
} 
export function createElement(element, className) {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    return newElement;
}
export function cancel(e) {
    if(e.target.className.includes('hidden')) {
        e.remove('hidden');
    } else {
        e.target.classList.add('hidden');
    }
}

export function addProject() {
    if(domObj.addProjectForm.className.includes('hidden')) {
        domObj.addProjectForm.classList.remove('hidden');
        domObj.addProject.classList.add('hidden');
        domObj.projectsSec.classList.add('hidden');
    } 
}

export class createProjectObject {
    constructor(name) {
        this.name = name;
    }

}
export function createProject() {
      let projectName = domObj.projectNameInput.value;
    if(projectName !== '') {
        const newProject = createElement('div', 'project');
        const projectIcon = createElement('img', 'project-icon');
        projectIcon.setAttribute('src', '../src/assets/to-do-icon.svg');
        newProject.appendChild(projectIcon);
        let projectNameP = createElement('p', 'project-name-p');
      
        projectNameP.innerText = projectName;
        newProject.appendChild(projectNameP);
        domObj.projectsSec.appendChild(newProject);
        newProject.classList.add('folder');
        domObj.addProjectForm.classList.add('hidden');
        domObj.projectNameInput.value = '';
        domObj.addProject.classList.remove('hidden');
        domObj.projectsSec.classList.remove('hidden');
        let newObj = new createProjectObject(projectName);
         const allProjects = Array.from(document.querySelectorAll('.project'));
        allProjects.map(item => {item.addEventListener('click', task)});
        return newObj;
    } else {
        alert('Enter text')
    }

}


export function addProjectCancel() {
    domObj.addProjectForm.classList.add('hidden');
    domObj.projectNameInput.value = '';
    domObj.addProject.classList.remove('hidden');
    domObj.projectsSec.classList.remove('hidden');
}