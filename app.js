const inputTextButton=document.querySelector(`#inputText`);
const addToDoButton=document.querySelector(`#addToDo`);
const clearToDoButton=document.querySelector(`#clearToDo`);
const toDoContainer=document.querySelector(`#toDoContainer`);







addToDoButton.addEventListener(`click`, function(){
    let paragraf=document.createElement(`p`);
    toDoContainer.appendChild(paragraf);
    paragraf.innerHTML=inputText.value;
paragraf.classList.add(".paragraf-styling")
    inputText.value="";

paragraf.addEventListener(`click`, function(){
    paragraf.style.textDecoration="line-through"
})

paragraf.addEventListener(`dblclick`, function(){
    paragraf.removeChild(paragraf);
})

clearToDoButton.addEventListener(`click`, function(){
   paragraf.remove();
})

})