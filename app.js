var btnTranslate=document.querySelector("#submit");

var textInput=document.querySelector("#text-area");

var outputDiv=document.querySelector("#output-box")

var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function errorHandler(error){
    alert("something is wrong please try again after some time or contact me ",error)
}

function constructUrl(text){
    return url+"?text="+text;
}

function doFetch(text){
    fetch(constructUrl(text))
    .then(response => response.json())
    .then(json =>{ outputDiv.innerText=json.contents.translated;
        console.log(json)})
    .catch(errorHandler)
}


btnTranslate.addEventListener("click",clickEventHandler)

function clickEventHandler(){
    var input=textInput.value;
    doFetch(input);
}
































// ===========================================================
//  the function below is to console the input text whwnever we click the textarea 
// ================================================


// textInput.addEventListener("click",testEvent)

// function testEvent(){
    
// var textValue=textInput.value;

// if(textValue!=""){
// console.log(textValue);
// }
    
// }
// =================
//  function over 
// =====================


// ================================================
// function to put the textInput to the outputDiv 
// =====================================================

// btnTranslate.addEventListener("click",output)

// function output(){
//     var textValue=textInput.value;
//     outputDiv.innerText=textValue;
//     console.log(textValue)
// }

// ======================
// functon Over
// =======================





// btnTranslate.addEventListener("click",clickEventHandler)

// function clickEventHandler(){
//     console.log("clicked");
// }