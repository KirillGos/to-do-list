import { domObj, projects } from "../index";

export function showProjectNameForm() {
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
class createProject {
    constructor(name) {
        this.name = name;
    }
}

export function addProject() {
    let projectName =  document.querySelector('.project-name-input').value;
    if(projectName !== undefined && projectName !== '') {
        const newProject = new createProject(projectName);
        projects.push(newProject);
        displayProject();
    } else {
        alert('Project name can\'t be empty');
    }
   
};

export function displayProject() {
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


        domObj.elements.projectsFolder.appendChild(project);  
    }
    // display projects and hide the project name form
    domObj.elements.allProjects.map(item => {
        item.classList.remove('hidden');
    });
    
    bubling();

    domObj.buttons.addFolderBtn.classList.remove('hidden');
    domObj.elements.projectNameForm.classList.add('hidden');
};

export function bubling() {
    let allProjects = Array.from(document.querySelectorAll('.project'));
    if(allProjects.length > 1) {
         allProjects.forEach(div => {
            div.addEventListener('click', folderClick);
        });
    }
}


export function folderClick(e) {    
    if(!e.target.className.includes('delete-project')) {
        e.stopPropagation();
        let index = this.dataset.index;
        if(projects.length > 0) {
            domObj.elements.folderName.innerText = projects[index].name;
            domObj.elements.folderName.setAttribute('data-index', index);
        } else {
            domObj.elements.folderName.innerText = '';
        }
    }
    
}

export function deleteProject(e) {
    let index = e.target.parentElement.dataset.index;
    projects.splice(index, 1);
    displayProject();
    if (domObj.elements.folderName.dataset.index != 0) {
         domObj.elements.folderName.dataset.index -= 1; 
        domObj.elements.folderName.innerText = projects[ document.querySelector('.folder-name').dataset.index].name;
    }
 
    let allProjects = Array.from(document.querySelectorAll('.project'));
     for(let a = 0; a < projects.length; a++) {
         allProjects[a].setAttribute('data-index', a);
     }
     if(projects.length == 0) {
        domObj.elements.folderName.innerText = 'no';
     }
 }

 export function projectCancel() {
    domObj.buttons.addFolderBtn.classList.remove('hidden');
    domObj.elements.projectNameForm.classList.add('hidden');
    Array.from(document.querySelectorAll('.project')).map(item => {
        item.classList.remove('hidden');
    }); 
}