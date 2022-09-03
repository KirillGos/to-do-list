import { domObj, addEvent, cancel, addProject, createProject, addProjectCancel, project } from './DOM/dom';
import { inboxSec } from './modules/inbox';
import { todaySec } from './modules/today'; 
import { weekSec } from './modules/week';
import './style/main.css';

const display = domObj.display;
const inbox = domObj.inbox;
const today = domObj.today;
const week = domObj.week;

addEvent(inbox, 'click', inboxSec);
addEvent(today, 'click', todaySec);
addEvent(week, 'click', weekSec);

const formSec = domObj.form;
const cancelProject = domObj.cancelProject;
addEvent(cancelProject, 'click', cancel);


const addFolderSec = domObj.addProject;
addFolderSec.addEventListener('click', addProject);

const addProjectAddBtn = domObj.addProjectAddBtn;
addProjectAddBtn.addEventListener('click', createProject);

const addProjectCancelBtn = domObj.addProjectCancelBtn;
addProjectCancelBtn.addEventListener('click', addProjectCancel); 
