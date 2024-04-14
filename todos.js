const todoForm = document.querySelector("form#todoForm");
const toDoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");

const TODOS_KEY = 'todos';
let todos = [];
const savedTodos = localStorage.getItem(TODOS_KEY);

function handleToDoSubmit(event){
  event.preventDefault();
  const submittedTodo = toDoInput.value;
  toDoInput.value = "";
  const submittedTodoObj = {
    text: submittedTodo,
    id: Date.now(),
  }
  todos.push(submittedTodoObj);
  saveToDos();
  paintToDo(submittedTodoObj);
}

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintToDo(submittedTodoObj){
  const li = document.createElement("li");
  const listSpan = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  li.appendChild(listSpan);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
  deleteButton.addEventListener('click', deleteToDo);
  listSpan.innerText = submittedTodoObj.text;
  li.id = submittedTodoObj.id;
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter(item => item.id !== parseInt(li.id));
  saveToDos();
}

if (savedTodos !== null){
  const parsedSavedTodos = JSON.parse(savedTodos);
  todos = parsedSavedTodos;
  todos.forEach(paintToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);