// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check">R</i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash">D</i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to main List (inside ul)
    todoList.appendChild(todoDiv);

    //Clear Todo Input value each time 
    todoInput.value = ""; 
}


// check e.target practise
function deleteCheck(e) {
    const item = e.target;

    // delete Todo
    if(item.classList[0] === 'trash-btn') {
       const todo = item.parentElement;
       //animation
       todo.classList.add('fall');

       //todo.remove();
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    //Check mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

