export const domObj = {
    display: document.querySelector('.display'),
    inbox: document.querySelector('.inbox'),
    today: document.querySelector('.today'),
    week: document.querySelector('.week'),
    form: document.querySelector('.form-sec'),
    cancelProject: document.querySelector('.cancel-project'),
    addProject: document.querySelector('.add-a-folder-sec'),
    addProjectForm: document.querySelector('.project-name'),
    addProjectCancelBtn: document.querySelector('.project-cancel-btn'),
    addProjectAddBtn: document.querySelector('.project-add-btn'),
    projectNameInput: document.querySelector('.project-name-input'),
    projects: document.querySelector('.projects'),
    projectsSec: document.querySelector('.to-do-list-sec'),
}
export const project = [];
export function addEvent(element, event, action) {
    return element.addEventListener(event, action);
} 
export function createElement(element, className) {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    return newElement;
}
export function cancel(e) {
    if(e.className.includes('hidden')) {
        e.remove('hidden');
    } else {
        e.classList.add('hidden');
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