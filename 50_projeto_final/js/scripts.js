// Função que adiciona tarefa

function addTask() {
    // Pegando o título da tarefa

    const taskTitle = document.querySelector("#task_title").value;

    if(taskTitle) {
        // Clonando o template

        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // Adicionando o título

        newTask.querySelector(".task_title").textContent = taskTitle;

        // Removendo as classes desnecessárias

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // Adicionando tarefa na lista

        const list = document.querySelector("#task_list");

        list.appendChild(newTask);

        // Adicionando o evento de remover tarefa

        const removeBtn = newTask.querySelector(".remove_btn").addEventListener("click", function() {
            removeTask(this);
        });

        // Adicionando evento de completar tarefa

        const doneBtn = newTask.querySelector(".done_btn").addEventListener("click", function() {
            completeTask(this);
        });

        // Limpando caixa de texto

        document.querySelector("#task_title").value = "";
    }
}

// Função para remover tarefa

function removeTask(task) {
    task.parentNode.remove(true);
}

// Função de completar tarefa

function completeTask(task) {
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");
}

// Evento de adicionar tarefa

const addBtn = document.querySelector("#add_btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    addTask();
});