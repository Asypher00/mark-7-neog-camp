var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputTxt = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getURL(text)
{
    return serverURL + "?text=" + text;
}

function errorHandler(error)
{ console.log("error is " , error)
alert("There is something wrong with server")}
btnTranslate.addEventListener("click",  clickEventHandler)

function clickEventHandler()
{
//outputTxt.innerText = " Valyrian = " + txtInput.value;//   
var inputText = txtInput.value ;
fetch( getURL(inputText))
.then(response => response.json())
.then( json => {var translatedText = json.contents.translated;
outputTxt.innerText = translatedText;})
.catch(errorHandler)
}
