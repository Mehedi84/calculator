const userInput = document.getElementById("userInput");
var valueof = '';

function press(num){
    valueof += num ;
    userInput.value = valueof;
}

function equal(){
    userInput.value = eval(valueof);
    valueof = '';
}
function clearData(){
    valueof = '';
    userInput.value = valueof;
}