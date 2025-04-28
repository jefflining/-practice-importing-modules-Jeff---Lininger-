function addTask(tasks, task){
    return tasks.push(task);
}
function listTasks(tasks){
    console.log(tasks);
}

module.exports = {addTask, listTasks};