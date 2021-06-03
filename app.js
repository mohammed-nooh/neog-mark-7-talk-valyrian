var btnTranslate=document.querySelector("#submit");

var textInput=document.querySelector("text-area");


textInput.addEventListener("change",testEvent)

function testEvent(){
    
var textValue=textInput.value;
console.log(textValue);
    
}









btnTranslate.addEventListener("click",clickEventHandler)

function clickEventHandler(){
    console.log("clicked");
}