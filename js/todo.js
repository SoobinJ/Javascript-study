const toDoForm=document.querySelector("#todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector("#todo-list");

const TODOS_KEY="todos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo)=>toDo.id!==parseInt(li.id));//클릭한 li.id와 다른 toDo는 남겨둠
    saveToDos();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;//li의 id를 지정
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement('button');
    button.innerText="❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;//input값 저장
    toDoInput.value="";//input 값 비우기
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);//paintToDo에는 text를 주는 것이 아니라 obf를 줌
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);//string->object
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}
