let result = document.getElementById("inputText");


//Display numbers on the input screen
let calculate = (number) =>{
    result.value += number;
}

//Calculation correction
let Result = () =>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        result.value = 'Syntax error';
    }
}

//Clear display
function clr(){
    result.value = ' ';
}

//Delete input from display
function del(){
    result.value = result.value.slice(0, -1);
}
