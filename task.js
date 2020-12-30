function Task(taskName,finalDate,taskInfo){
    this.taskName=taskName;
    this.finalDate=finalDate;
    this.taskInfo=taskInfo;
    this.taskStatus="in process"
    this.container;
}

Task.prototype.changeTaskName=function(newTask){
    this.taskName=newTask;

}

Task.prototype.changeStatus=function(newStatus){
    this.taskStatus=newStatus;         

}

Task.prototype.changeTask=function(newtaskName,newfinalDate,newtaskInfo){
    this.taskName=newtaskName;
    this.finalDate=newfinalDate;
    this.taskInfo=newtaskInfo;
}

Task.prototype.changeTaskDate=function(newDate){
    this.finalDate=newDate

}




