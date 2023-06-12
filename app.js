


const addbButton=document.querySelector(`#addToDo`);

const clearButton=document.querySelector(`#clearToDo`);

const toDoContainer=document.querySelector(`#toDoContainer`);

const inputText=document.querySelector(`#inputText`)

addbButton.addEventListener(`click`, function(){

 let paragraf =document.createElement(`p`);

 toDoContainer.appendChild(paragraf);
 paragraf.innerHTML=inputText.value;
 inputText.value=""

})