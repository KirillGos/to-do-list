import { domObj, addEvent, cancel, addProject, createProject, addProjectCancel, project, createTask } from './DOM/dom';
import { inboxSec } from './modules/inbox';
import { todaySec } from './modules/today'; 
import { weekSec } from './modules/week';
import './style/main.css';
import { task, addProjectToProjects } from './task'


const display = domObj.display;
const inbox = domObj.inbox;
const today = domObj.today;
const week = domObj.week;

addEvent(inbox, 'click', inboxSec);
addEvent(today, 'click', todaySec);
addEvent(week, 'click', weekSec);




const addFolderSec = domObj.addProject;
addFolderSec.addEventListener('click', addProject);

const addProjectAddBtn = domObj.addProjectAddBtn;
addProjectAddBtn.addEventListener('click', addProjectToProjects);

const addProjectCancelBtn = domObj.addProjectCancelBtn;
addProjectCancelBtn.addEventListener('click', addProjectCancel); 

const allProjects = domObj.project;
allProjects.map(item => {item.addEventListener('click', task)});

const taskAdd = domObj.taskAdd;
// taskAdd.addEventListener('click', )