let input = document.querySelector('.input__text');
let btn = document.querySelector('.btn');
let list = document.querySelector('.list__block');
let main = document.querySelector('main')



let tasks = JSON.parse(localStorage.getItem('dataTasks')) || [];


function insert(){
    list.innerHTML = '';
    for(task of tasks){
        
        let itemList = document.createElement('li');
        itemList.setAttribute('class', 'list__block--item');

        itemList.onclick = function(){
            removeTask(this);
        }
        let itemText = document.createTextNode(task);
        itemList.appendChild(itemText);

        list.appendChild(itemList);
    }
}
insert()
btn.onclick = function(){
    if(input.value !== ''){
        removeSpan();
        let newTask = input.value;
        tasks.push(newTask);
        insert();
        input.innerHTML = '';
        dataSave();
    }else{
        removeSpan();

        let span = document.createElement('span');
        let textSpan = document.createTextNode(' Please enter a task! ')

        span.appendChild(textSpan);
        main.appendChild(span);
    }
    input.value = '';
}

function removeSpan(){
    let spans = document.querySelectorAll('span');
    for(let i = 0 ; i< spans.length ; i++){
        main.removeChild(spans[i]);
    }

}
function removeTask(task){
    tasks.splice(tasks.indexOf(task.textContent),1);
    insert();
    dataSave();
}

function dataSave(){
    localStorage.setItem('dataTasks',JSON.stringify(tasks));
}

