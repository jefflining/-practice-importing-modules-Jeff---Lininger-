const fs = require('fs');
// const path = require('path');
// const tasks = require('./ taskManager.js');

// fs.writeFileSync("taskManager.js", data);
function saveTasks(filePath, tasks){
    fs.writeFileSync(filePath, JSON.stringify(tasks));
    console.log("Tasks saved.")
}
function loadTasks(filePath){
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
     } else {
        console.log([]);
     }
     
}
module.exports = {saveTasks, loadTasks};