import { domObj, projects } from "../index";




export function displayForm() {
    domObj.elements.addTaskForm.classList.remove('hidden');
    domObj.elements.tasks.classList.add('hidden');
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


export function displayTask(e) {
    domObj.elements.tasks.classList.remove('hidden');

        // info
        const dateInput = document.querySelector('.task-date-input');
        const nameInput = document.querySelector('.task-name');

        const task = document.createElement('div');
        task.classList.add('task');

        const title = document.createElement('p');
        title.classList.add('title-task');
        title.innerText = nameInput.value;
       
        const date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.setAttribute('class', 'task-date');
        date.value = dateInput.value; 

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.classList.add('delete-task-btn');
        deleteTaskBtn.innerText = 'X';
        
        task.appendChild(title);
        task.appendChild(date);
        task.appendChild(deleteTaskBtn);
         domObj.elements.tasks.appendChild(task);

        // create task object
        const taskObj = new createTaskProperties(nameInput.value, dateInput.value );
        console.log(taskObj);

        //  hide the adding form
        domObj.elements.addTaskForm.classList.add('hidden');
        nameInput.value = '';
        dateInput.value = '';
};
