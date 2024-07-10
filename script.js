let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('print-btn').addEventListener('click', printList);

function addTask() {
    const taskInput = prompt('Enter a task:');
    const taskDate = prompt('Enter the due date (YYYY-MM-DD):');
    const completionDate = prompt('Enter the completion date (YYYY-MM-DD, optional):') || 'Not completed yet';

    if (taskInput && taskDate) {
        const task = {
            text: taskInput,
            completed: false,
            date: taskDate,
            completionDate: completionDate
        };
        taskList.push(task);
        renderTaskList();
    } else {
        alert('Task description and due date are required.');
    }
}

function renderTaskList() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskCompletion(${index})">
            <span>${task.text}</span>
            <span class="task-dates">Due: ${task.date} | Completed: ${task.completed ? task.completionDate : 'Not completed yet'}</span>
        `;
        taskListElement.appendChild(taskElement);
    });
}

function toggleTaskCompletion(index) {
    taskList[index].completed = !taskList[index].completed;
    if (taskList[index].completed) {
        taskList[index].completionDate = new Date().toLocaleDateString();
    } else {
        taskList[index].completionDate = 'Not completed yet';
    }
    renderTaskList();
}

function printList() {
    window.print();
}

