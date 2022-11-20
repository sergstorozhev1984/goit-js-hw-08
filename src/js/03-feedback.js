import {saveToLS, loadFromLS} from './helpers';
import throttle from 'lodash.throttle';

const refs = {
    formEl: document.querySelector('.feedback-form'),
}
function onLoad() {
    const objFromLS = loadFromLS('feedback-form-state');
    if (objFromLS !== null) {
        refs.formEl.elements.email.value = objFromLS.email;
        refs.formEl.elements.message.value = objFromLS.message;
    }  
}
onLoad();

refs.formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit (e) {
    e.preventDefault();
    localStorage.clear();

    const formData = new FormData(e.target);
    const objData = {};

    for (let [key, value] of formData) {
        objData[key] = value;
    }

    console.log(objData);
    e.target.reset();
}

refs.formEl.addEventListener('input', throttle(e => {
    const obj = {};
    obj.email = refs.formEl.elements.email.value;
    obj.message = refs.formEl.elements.message.value;
    saveToLS('feedback-form-state', obj);
}, 500));

