const btn = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const list = document.querySelector('.list-task')

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
      addTask()
    }
  });

let taskList = []
function addTask(){
    taskList.push({
        task: input.value,
        concluida: false
    })
    showTasks()
    input.value = ''
}

function showTasks() {
    let newLi = '';
    taskList.forEach((item, position) => {
      newLi += `
        <li class="list-tasks ${item.concluida ? 'done' : ''}">
          <img src="assets/imagens/ok-checkbox.png" alt="checked-icon" onclick="checkItem(${position})">
          <p>${item.task}</p>
          <img src="assets/imagens/remove.png" alt="trash-icon" onclick="removeItem(${position})">
        </li>
      `;
    });
    list.innerHTML = newLi;

    localStorage.setItem('tasks', JSON.stringify(taskList))
  }

  window.addEventListener('DOMContentLoaded', () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      taskList = JSON.parse(savedTasks);
      showTasks();
    }
  });
function removeItem(posicao){
    taskList.splice(posicao, 1)

    showTasks()
}

function checkItem(posicao){
    taskList[posicao].concluida = !taskList[posicao].concluida

    showTasks()
}

btn.addEventListener('click', addTask)
