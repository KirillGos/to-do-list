import { domObj, projects } from "../index";

export function folderEvent(e) {
    let currentFolder = e.target.dataset.index;
}

export function displayForm() {
        domObj.elements.addTaskForm.classList.remove('hidden');
}

export  function createTask(e) {
    let task = {}
    console.log(projects)
    console.log(e.target.dataset.index)
    task.title = document.querySelector('.task-name').value;
    task.date = document.querySelector('.task-date').value;
    let index = e.target.dataset.index;
    projects[index].task = task;
    displayTask();
}

export function displayTask(e) {
     domObj.tasks.innerText = '';
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].title !== undefined && projects[i].date !== undefined) {
            const task = document.createElement('div');
            task.classList.add('task');

            const title = document.createElement('p');
            title.classList.add('title-task');
            title.innerText = projects[i].title;

            const date = document.createElement('input');
            date.classList.add('task-date');
            date.value = projects[i].date;

            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.classList.add('.delete-task-btn');
            deleteTaskBtn.innerText = 'X';
            

            task.appendChild(deleteTaskBtn);
        };
    };
};

