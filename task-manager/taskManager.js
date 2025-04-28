function addTask(tasks, task){
    return tasks += task;
}
function listTasks(tasks){
    console.log(tasks);
}

module.exports = {addTask, listTasks};