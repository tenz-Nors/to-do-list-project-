const todoList = [];

function addTodo() {
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  const dueDateElement = document.querySelector('.js-due-date');
  const dueDate = dueDateElement.value;

  if (name && dueDate) {
    todoList.push({
      name: name,
      dueDate: dueDate,
    });

    renderTodoList();
    nameInputElement.value = '';
    dueDateElement.value = '';
  }
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
      <p>${name} - Due Date: ${dueDate}
        <button onclick="deleteTodo(${i})">Delete</button>
      </p>
    `;

    todoListHTML += html;
  }

  const todoListElement = document.querySelector('.js-todo-list');
  todoListElement.innerHTML = todoListHTML;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

renderTodoList(); // Initial rendering