
let employee1 = new Employee("Erkan Sevim","Designer");
let card1 = new Card(12);

let task1 = new Task("Design","12.02.2020","12.02.2020","ASLflsdflsdlflsd");
let task2 = new Task("Tasarım","12.02.2020","12.02.2020","ASLflsdflsdlflsd");
let task3 = new Task("Coding","12.02.2020","12.02.2020","ASLflsdflsdlflsd");

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