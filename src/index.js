import { domObj, addEvent } from './DOM/dom';
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
