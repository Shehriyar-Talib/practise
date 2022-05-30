

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let list = document.querySelector("#list")




btn.addEventListener('click',addtodo)
function addtodo(){
  var paragraph = document.createElement('p')
  list.appendChild(paragraph)
  paragraph.innerText = input.value
  input.value = '';
  paragraph.addEventListener('click',linethrough)
  function linethrough(){
    paragraph.style.textDecoration = 'line-through'
  }
   paragraph.addEventListener('dblclick',remove) 
   function remove(){
     list.removeChild(paragraph)
   }
}