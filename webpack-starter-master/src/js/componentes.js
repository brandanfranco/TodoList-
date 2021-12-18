import {Todo} from "../classes"
import {todoList} from "../index.js"


const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo")


export const creadoHtml = (todo) =>{

    const HtmlTodo = 
        `<li class="${(todo.completado)?"completed":""}" data-id="${todo.id}">
            <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)?"checked":""}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`


       const div = document.createElement("div") 

       div.innerHTML = HtmlTodo

       divTodoList.appendChild(div.firstElementChild)

       return div.firstElementChild


}

// Events 

txtInput.addEventListener("keyup", (event) =>{
        if(event.keyCode === 13 && txtInput.value.length > 0){
            const nuevoTodo = new Todo(txtInput.value)
            todoList.nuevoTodo(nuevoTodo)
            creadoHtml(nuevoTodo)
            txtInput.value = ""

        }
})


divTodoList.addEventListener("click", (event) =>{
    const nombreDeElemento = event.target.localName  // label , input , button
    const todoElemento = event.target.parentElement.parentElement
    const todoId = todoElemento.getAttribute("data-id")


    if( nombreDeElemento.includes("input")){ // click in check

        todoList.marcarCompletado(todoId)
        todoElemento.classList.toggle("completed")
    }


    console.log(todoElemento)
    console.log(todoId)
})