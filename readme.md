# Ejercicio 2: Dibujar tareas en el DOM

## ✨ Descripción

Este ejercicio tiene como objetivo practicar el manejo de datos obtenidos de una fuente externa y su representación en el DOM. Usaremos un array de datos de tareas (TODOs) provenientes de `https://jsonplaceholder.typicode.com/todos` para renderizarlas dinámicamente en una página web.

## 🛠️ Pasos para completar el ejercicio

1. 🌐 Accede a la URL `https://jsonplaceholder.typicode.com/todos` y copia el contenido del array que se encuentra allí.
2. 💾 Crea una variable en tu archivo JavaScript llamada `todos` y asigna todo el array copiado a esta variable.
3. 🖼️ Prepara en el archivo HTML un contenedor donde se mostrarán las tareas, como un `<ul>` con un `id` específico.
4. 🔄 Recorre el array usando un bucle (`for`, `forEach`, etc.) y dibuja todas las tareas en la página.
5. 🎨 Añade un estilo especial para las tareas completadas (`completed: true`). Por ejemplo, podrías usar texto tachado o un color diferente.
6. 🖱️ Crea un botón que filtre y muestre solo las tareas del usuario con `id: 3`.

## 🌟 Estructura esperada

El ejercicio requiere la creación de un archivo HTML con un contenedor para las tareas, un botón de filtro y un archivo JavaScript para manejar el array de tareas y renderizarlas dinámicamente en el DOM.

## 📚 Recursos

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Document.createElement](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
- [HTMLElement.appendChild](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
- [Array.prototype.filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

## 📂 Nombre del Repositorio

`draw-todos-dom`
