const btn = document.querySelector('.btn');
const list = document.querySelector('#container__list');
const task = document.querySelector('#task');

btn.addEventListener('click', function() {
    if(task.value === '') {
        alert('Put something in the cup!!');
    } else {
        let listItem = document.createElement('li');
        listItem.innerText = task.value;
        list.append(listItem);
        let exit = document.createElement('span');
        exit.innerText = '\u00d7';
        listItem.append(exit);
    }
    task.value = ''
});

// list.addEventListener('click', function(e) {
//     if(e.target.tagName === 'SPAN') {
//         e.target.parentElement.remove();
//     }
// }, false);

list.addEventListener('click', function(e) {
    if(e.target.matches('li')) {
        e.target.classList.toggle('checked');
    }
    else if (e.target.matches('span')) {
        e.target.parentElement.remove();
    }
});
