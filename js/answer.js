`use strict`;

(function () {
    const userDataObj = JSON.parse(localStorage.getItem(`formData`));
    console.log(userDataObj)

    // let result = Object.entries(userDataObj).map(([key, value]) => `${key} = ${value}`).join(`\n`);
    // console.log(result);

    // const entries = Object.entries(userDataObj);
    const ul = document.createElement('ul');
    document.body.append(ul);


    // let output = '';
    //
    // userDataObj.forEach(([key, value]) => {
    //     output += `<li>${key}: ${value}</li>`;
    //     document.querySelector('ul').innerHTML = output;
    // });

    // for (let i = 0; i < entries.length; i++) {
    //     let li = document.createElement('li');
    //     li.innerHTML = result;
    //     ul.append(li);
    // }
    //
    for (const [key, value] of Object.entries(userDataObj)) {
        let li = document.createElement('li');
        li.innerHTML = `${key}: ${value}`
        ul.append(li);
    }
    //
    //
    // for (let i = 0; i < result.length; i++) {
    //     let li = document.createElement('li');
    //     li.innerHTML = result[i];
    //     ul.append(li);
    // }

})()