const urlAPITodo = ("https://jsonplaceholder.typicode.com/todos"); // Le asignamos la API a una variable.

const contenedor = document.querySelector(".tasks-container");

let todos = [];
fetch(urlAPITodo)
  .then(response => response.json())
  .then((zeida) => {
    todos = zeida;
    showAll(zeida);
  });

function filter() {
  const user = parseInt(document.querySelector(".input-filter").value);
  const filteredTasks = todos.filter(task => task.userId === user);
  contenedor.innerHTML = "";
  filteredTasks.forEach(task => {
    contenedor.innerHTML += printTask(task);
  });
}

function printTask(task) {
  const todo = "🚧";
  const done = "✅";
  return `<div class="task"><div class="user-id">${task.userId}</div><div class="task-text ${task.completed ? "done" : "todo"}"> ${task.completed ? done : todo} ${task.title}</div></div>`;
}

function showAll(todos) {
  const contenedor = document.querySelector(".tasks-container");
  contenedor.innerHTML = "";
  todos.forEach(task => {
    contenedor.innerHTML += printTask(task);
  });
}
