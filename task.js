function Task(taskName,finalDate,taskInfo){
    this.taskName=taskName;
    let d=new Date();
    this.startDate=`${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
    this.finalDate=finalDate;
    this.taskInfo=taskInfo;
    this.taskStatus="in process";
    this.container;
    this.card;
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




