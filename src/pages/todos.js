import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import api from "../services/api.js";

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    const todoList = document.getElementById("todo-list");
    const createTodoForm = document.getElementById("todo-form");
    const emptyTodoTitle = document.querySelector(".todo_list__empty");

    // createTodoForm.addEventListener("submit", createTodo);
    todoList.addEventListener('click', removeTodo);
    todoList.addEventListener('click', updateTodo);

    // create POST /todo { description: string }
    const createTodoRequest = async (values) => {
        return await api('/todo/', {
            method: 'POST',
            body: JSON.stringify({
                description: values
            })
        }
        )
    }

    // get get /todo/1 - 1 это id
    const getTodoRequest = async (id) => {
        return await api(`/todo/${id}`, {
            method: 'GET'
        }
        )
    }

    // getAll get /todo
    const getTodosRequest = async () => {
        return await api('/todo/', {
            method: 'GET'
        }
        ).then(obj => {return obj.data})
    }

    // update put /todo/1 - 1 это id { description: string }
    const   updateTodoRequest = async (id, value) => {
        return await api(`/todo/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                completed: value
            })
        }
        )
    }

    // delete delete /todo/1 - 1 это id
    const deleteTodoRequest = async (id) => {
        return await api(`/todo/${id}`, {
            method: 'DELETE'
        }
        )
    }

    const renderTodo = (todo) => {
        let html = '';
        html += `
            <li class="todo_list__item" data-id=${todo.id}>
                <span class="todo_item__description">${todo.description}</span>
                <div class="todo_item__buttons">
                    <label>
                        <input type="checkbox" class="todo_item__status" 
                        value=${todo.completed} 
                        ${todo.completed ? "checked" : null} data-action="update">
                        <span></span>
                    </label>
                    <button type="button" class="delete_todo" data-action="delete">X</button>
                </div>
            </li>
        `
        todoList.insertAdjacentHTML('beforeend', html);
    }

    const getTodosAndRender = async () => {
        todoList.innerHTML = ''
        loading.start();
        let todos = await getTodosRequest();
        if (typeof todos !== 'undefined')
        {
            loading.stop()
            for (let todo of todos) {
                    renderTodo(todo);
                }
                if (todoList.children.length > 0) {
                    emptyTodoTitle.classList.add('none')
                }
        }
    }

    function createTodo(event) {
        event.preventDefault();
        let description = createTodoForm.elements['todo-description'].value;
        createTodoForm.elements["todo-description"].value = "";
        createTodoForm.elements["todo-description"].focus();
        createTodoRequest(description).then(
            (res) => {
                if (res.ok) {
                    getTodosAndRender();
                }
            })
    }

    createTodoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let description = createTodoForm.elements['todo-description'].value;
        createTodoForm.elements["todo-description"].value = "";
        createTodoForm.elements["todo-description"].focus();
        createTodoRequest(description).then(
            (res) => {
                if (res.ok) {
                    getTodosAndRender();
                }
            })
    })

    function removeTodo (event) {
        if (event.target.dataset.action === 'delete') {
            let id = event.target.parentElement.parentElement.dataset.id;
            deleteTodoRequest(id).then(
                () => {
                    getTodosAndRender();
                })
        }
    }

    // меняет  его значение только когда сервер изменит статус todo
    async function updateTodo (event) {
        if (event.target.dataset.action === 'update') {
            event.preventDefault();
            let checkbox = event.target.parentElement.querySelector(".todo_item__status");
            let id = event.target.parentElement.parentElement.parentElement.dataset.id;
            let completed = checkbox.value === 'true';
            // console.log(completed)
            await updateTodoRequest(id, !completed).then(
                (res) => {
                    if (res.ok) {
                        if (res.data["completed"]) {
                            checkbox["checked"] = true
                            checkbox.value = "true"
                        }
                        else {
                            checkbox["checked"] = false
                            checkbox.value = "false"
                        }
                        getTodosAndRender();
                    }
                })
        }
    }

    getTodosAndRender()
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
