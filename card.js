
function Card(employee,id) {
  this.employee = employee
  this.id = id;
  this.taskList = [];
  this.container;
}

Card.prototype.isEmpty = function (){
  if (this.taskList.length == 0) {
    return true;
  }else{
    return false;
  }
}