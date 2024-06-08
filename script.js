// script.js

const taskInput = document.getElementById('text');
const addTaskButton = document.getElementById('btn-addtask');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const inputValue = taskInput.value

    if (inputValue !== "") {
        addTask(inputValue);
        taskInput.value = " ";
    }
});

function addTask(inputValue) {
    const li = document.createElement('li')
    li.innerText = inputValue

    //now add some css to look awesome list


    li.style.cssText = `
    border:2px solid #5A72A0;
    text-align:start;
    margin-top:10px;
    margin-left:8%;
    font-size:25px;
    list-style:none;
    width:75%;
    padding:15px;
    `
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    // now deign delete button css

    deleteButton.style.cssText = `
background-color:#ED2939;
padding:5px;
color:White;
font-size:10px;
border-radius:15px;
height:30px;
width:75px;
position:relative;
cursor:pointer;
float:right;
outline:none
`

    li.appendChild(deleteButton)
    taskList.appendChild(li)

    // now add delete li logic

    deleteButton.addEventListener('click',()=>{
        li.remove();
    })
}