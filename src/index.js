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
  return `<div class="task"><div class="user-id">${task.userId}</div><div class="task-text ${task.completed ? "done" : "todo"}"> ${task.completed ? done : todo} ${task.title}</div><button id="${task.userId}" onclick="deleteTask(${task.id})">🗑️</button></div>`;
}

function showAll(todos) {
  const contenedor = document.querySelector(".tasks-container");
  contenedor.innerHTML = "";
  todos.forEach(task => {
    contenedor.innerHTML += printTask(task);
  });
}

function addTask() {
  const idUser = document.getElementById("id-user").value;
  const msgTask = document.getElementById("task-info").value;
  const checkboxDone = document.getElementById("done").checked;

  const newTask =
  {
    userId: idUser,
    title: msgTask,
    completed: checkboxDone
  };

  fetch(urlAPITodo, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(newTask)
  })
    .then(response => response.json())
    .then(task => {
      // printTask(task);
      todos.push(task);
      showAll(todos);
      clearForm();
      console.log(task);
    });
}

function deleteTask(id) {
  fetch(`${urlAPITodo}/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        console.log("Tarea eliminada");
        todos = todos.filter(task => task.id !== id);
        showAll(todos);
      } else {
        console.error("La tarea no ha sido eliminada");
      }
    })
    .catch(error => console.error("Error", error));
}

function clearForm() {
  let idUser = document.getElementById("id-user").value;
  let msgTask = document.getElementById("task-info").value;
  const checkboxDone = document.getElementById("done").checked;

  idUser = "";
  msgTask = "";
  checkboxDone.checked = false;
}

function modifyTask() {
  const taskID = document.getElementById("id-user").value;
  const msgTask = document.getElementById("task-info").value;
  const checkboxDone = document.getElementById("done").checked;

  const modifiedTask =
  {
    title: msgTask,
    completed: checkboxDone
  };

  fetch(`${urlAPITodo}/${taskID}`, {
    method: "PATCH",
    body: JSON.stringify(modifiedTask),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      // clearForm();
      console.log("Paso 1", data);
      const taskFound = todos.find(task => task.id === parseInt(taskID));
      console.log("Paso 2 -Datos Cambiados", taskFound);
      taskFound.title = data.title;
      console.log("Paso 3 - Valores del Tittle Cambiados", taskFound.title);
      taskFound.completed = data.completed;
      console.log("Paso 4 - Valores del Completed Cambiados", taskFound.completed);

      showAll(todos);
    }).catch(error => console.error("Error", error));
}
