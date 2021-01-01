

const draggables = document.querySelectorAll('.draggable');
const cards = document.querySelectorAll('.card')

console.log("bu çalıştı");
draggables.forEach(draggable => {
  
  draggable.addEventListener('dragstart',()=>{
    console.log("girdim");
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend',()=>{
   draggable.classList.remove('dragging')
  
  });
});

cards.forEach(card => {
 card.addEventListener('dragover', e =>{
   e.preventDefault();
   const afterElement = getDragAfterElement(card,e.clientY);
   const draggable = document.querySelector('.dragging');
   if (afterElement == null) {
     card.appendChild(draggable);
   }else{
     card.insertBefore(draggable,afterElement);
   }
  
 })
})

function getDragAfterElement(card,mouseY) {
 const draggableElement= [...card.querySelectorAll('.draggable:not(.dragging)')];
  return draggableElement.reduce((closest,child) => {
   const box = child.getBoundingClientRect();
   const offset = mouseY - box.top - box.height / 2;
   if (offset < 0 && closest.offset) {
     return {
       offset:offset ,
       element:child
     }
   }else{
     return closest
   }
 },{offset : Number.NEGATIVE_INFINITY}).element
}