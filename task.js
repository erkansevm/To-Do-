function Task(taskName,startDate,finalDate,taskInfo,taskId){
    this.taskName=taskName;
    this.startDate=startDate;
    this.finalDate=finalDate;
    this.taskInfo=taskInfo;
    this.taskStatus="in process"
    this.container;
    this.id=taskId;
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




