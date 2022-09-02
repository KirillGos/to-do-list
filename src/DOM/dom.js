export const domObj = {
    display: document.querySelector('.display'),
    inbox: document.querySelector('.inbox'),
    today: document.querySelector('.today'),
    week: document.querySelector('.week'),
    form: document.querySelector('.form-sec'),
}

export function addEvent(element, event, action) {
    return element.addEventListener(event, action);
} 