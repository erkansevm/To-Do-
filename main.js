
let employee1 = new Employee("Erkan Sevim","Designer");
let card1 = new Card(12);


let task1 = new Task("Design","12.02.2020","12.02.2021","ASLflsdflsdlflsd");
let task2 = new Task("Tasarım","12.02.2020","12.02.2021","ASLflsdflsdlflsd");
let task3 = new Task("Coding","12.02.2020","12.02.2021","ASLflsdflsdlflsd");

cardEmployeeHandler.createConnection(card1,employee1)

Controlct.addTaskList(task1,card1);
Controlct.addTaskList(task2,card1);
Controlct.addTaskList(task3,card1);

createElement.createTaskDiv(task3);
createElement.createTaskDiv(task2);
createElement.createTaskDiv(task1);

createElement.createEmployeeDiv(employee1)



createElement.createCardDiv(card1)
updateView.updateCard(card1,employee1);


let employee2 = new Employee("Furkan Sevim","Dev");
let card2 = new Card(15);

let task11 = new Task("Design","12.31.2020","12.02.2021","ASLflsdflsdlflsd");
let task22 = new Task("Tasarım","12.02.2020","12.02.2021","ASLflsdflsdlflsd");
let task33 = new Task("Coding","12.02.2020","12.02.2021","ASLflsdflsdlflsd");


cardEmployeeHandler.createConnection(card2,employee2)
Controlct.addTaskList(task11,card2);
Controlct.addTaskList(task22,card2);
Controlct.addTaskList(task33,card2);

createElement.createTaskDiv(task33);
createElement.createTaskDiv(task22);
createElement.createTaskDiv(task11);
createElement.createEmployeeDiv(employee2)


createElement.createCardDiv(card2)
updateView.updateCard(card2,employee2);


document.querySelector("#filter").addEventListener('click',()=>{
  objectDragHandler.filterEmployeeByJob('Designer')
})