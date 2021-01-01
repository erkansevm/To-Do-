function Task(taskName,startDate,finalDate,taskInfo){
    this.taskName=taskName;
    this.startDate=startDate;
    this.finalDate=finalDate;
    this.taskInfo=taskInfo;
    this.taskStatus="in process";
    this.container;
}

Task.prototype.changeTaskName=function(newTask){
    this.taskName=newTask;

}

Task.prototype.changeStatus=function(newStatus){
    this.taskStatus=newStatus;         

}

Task.prototype.changeStartDate=function(newstartDate){
    
    this.startDate=newstartDate;
}

Task.prototype.changeFinalDate=function(newfinalDate){
    this.finalDate=newfinalDate;

}


Task.prototype.changeInfo=function(newInfo){
    this.taskInfo=newInfo

}




