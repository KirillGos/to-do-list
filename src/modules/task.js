import { domObj, projects } from "../index";




export function displayForm() {
    domObj.elements.addTaskForm.classList.remove('hidden');
    domObj.elements.tasks.classList.add('hidden');
}
export function addToTask() {
    let index =  domObj.elements.folderName.dataset.index;
    let title = document.querySelector('.task-name').value;
    let date = document.querySelector('.task-date-input').value;
    let task = new createTaskProperties(title, date);
    
  
    projects[index].tasks.push(task);
    displayTask(index);
    document.querySelector('.task-name').value = '';
    document.querySelector('.task-date-input').value = '';
}

export function cancelTask()  {
    domObj.elements.addTaskForm.classList.add('hidden');
    domObj.elements.tasks.classList.remove('hidden');
    document.querySelector('.task-name').value = '';
    document.querySelector('.task-date-input').value = '';
 }

export function createTaskProperties(title, date) {
    return { title, date }
}


export function displayTask(index) {
    domObj.elements.tasks.classList.remove('hidden');
    domObj.elements.tasks.innerText = '';
    for(let i = 0; i < projects[index].tasks.length; i++) {
        // info
        const title = projects[index].tasks[i].title;
        const date = projects[index].tasks[i].date;

        const task = document.createElement('div');
        task.classList.add('task');

        const titleP = document.createElement('p');
        titleP.classList.add('title-task');
        titleP.innerText = title;
       
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('class', 'task-date');
        dateInput.value = date;

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.classList.add('delete-task-btn');
        deleteTaskBtn.innerText = 'X';
        
        task.appendChild(titleP);
        task.appendChild(dateInput);
        task.appendChild(deleteTaskBtn);
         domObj.elements.tasks.appendChild(task);
    }
        //  hide the adding form
        domObj.elements.addTaskForm.classList.add('hidden');
        // nameInput.value = '';
        // dateInput.value = '';
};
