import { domObj, createProject, createTaskObject, createProjectObject } from "./DOM/dom"; 

const projects = [];
export function task(e) {
     const allProjects = domObj.project;
    const display = domObj.display;
    const header = document.createElement('h1');
    header.innerText = e.target.innerText;
    let currentObject = e.target.innerText;
    display.innerHTML = ''
    
} 
export function addProjectToProjects() {
    const object = createProject();
    if(object !== undefined) {
         projects.push(object);
    }
    console.log(projects);
}




// export function createTask() {
//     const title = 
// }