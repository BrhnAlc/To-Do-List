
 const inputTextButton=document.querySelector(`#inputText`);

 const addToDoButton=document.querySelector(`#addToDo`);

 const clearToDoButton=document.querySelector(`#clearToDo`);

const toDoContainer=document.querySelector(`#toDoContainer`); 



addToDoButton.addEventListener(`click`, function(){

let paragraf=document.createElement("p");

toDoContainer.appendChild(paragraf);

paragraf.innerHTML=inputText.value;

inputText.value="";


})














// const addbButton=document.querySelector(`#addToDo`);

// const clearButton=document.querySelector(`#clearToDo`);

// const toDoContainer=document.querySelector(`#toDoContainer`);

// const inputText=document.querySelector(`#inputText`)

// addbButton.addEventListener(`click`, function(){

//  let paragraf =document.createElement(`p`);
//  paragraf.classList.add(`.paragraf-styling`);
//  toDoContainer.appendChild(paragraf);
//  paragraf.innerHTML=inputText.value;
//  inputText.value=""


//  clearButton.addEventListener(`click`, function(){
//     paragraf.style.display="none"
//  })





//  paragraf.addEventListener(`click`, function(){
//     paragraf.style.textDecoration=`line-through`;
//  })


//  paragraf.addEventListener(`dblclick`, function(){
//     toDoContainer.removeChild(paragraf);
//  })

// })