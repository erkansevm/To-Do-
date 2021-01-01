
function Card(id) {
  this.id = id;
  this.taskList = [];
  this.container;
  this.employee;
}

Card.prototype.isEmpty = function (){
  if (this.taskList.length == 0) {
    return true;
  }else{
    return false;
  }
}


