const taskManager = require('./taskManager.js');
const fileHandler = require('./fileHandler.js');
const path = require('path');

let taskList = ['Work'];

taskManager.addTask(taskList, 'Walk dog');
taskManager.addTask(taskList, 'Clean room');
taskManager.addTask(taskList, 'Do dishes');
taskManager.listTasks(taskList);

let fileTasks = fileHandler.loadTasks('./tasks.json');

for (let task of fileTasks) {
    if (task.length > 0  && !taskList.includes(task)) {
       taskList.push(task);
    }
}

console.log(taskList);