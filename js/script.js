`use strict`;

(function () {
    const form = document.querySelector(`#form`);
    form.addEventListener(`submit`, (e) => {
        e.preventDefault();
        const {target: form} = e;
        const inputs = form.querySelectorAll(`input, select, textarea`);
        const formData = {};
        for (const input of inputs) {
            const {name, value} = input;
            formData[name] = value;
        }
        localStorage.setItem(`formData`, JSON.stringify(formData));
    })
    const submitBtn = document.querySelector(`.btn-primary`);
    submitBtn.addEventListener(`click`, (item) => {
        window.open(`./answer.html`);
    })
})()


// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}: ${localStorage.getItem(key)}`);
//     }