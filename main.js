
let employee1 = new Employee("Erkan","Designer");
let card1 = new Card(12);

let task1 = new Task("Design","12.02.2020","12.02.2020","ASLflsdflsdlflsd");
let task2 = new Task("Tasarım","12.02.2020","12.02.2020","ASLflsdflsdlflsd");

Controlct.addTaskList(task1,card1);
Controlct.addTaskList(task2,card1);
createElement.createTaskDiv(task2);
createElement.createTaskDiv(task1);

createElement.createCardDiv(card1)
updateView.updateCard(card1);