const taskManager = require('./taskManager.js');
const fileHandler = require('./fileHandler.js');
const path = require('path');
fileHandler.loadTasks(`./tasks.json`);

taskManager.addTask(tasks, 'Walk dog');
taskManager.addTask(tasks, 'Clean room');
taskManager.addTask(tasks, 'Do dishes');
taskManager.listTasks(tasks);

fileHandler.saveTasks('./tasks.json', tasks);

console.log(tasks);