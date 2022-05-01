var count = 0;
var botaosomar = document.getElementById("somar").addEventListener("click",increment);
var botaosubtrair = document.getElementById("subtrair").addEventListener("click",decrement);


function increment(){
    count++;
    document.getElementById("currentNumber").innerHTML = count; 
    if(count >= 10){
        document.getElementById("somar").remove();
    }
    if(count >= 1){
        document.getElementById("currentNumber").style.color = "yellow";
    }
    else if(count == 0){
        document.getElementById("currentNumber").style.color = "black";
    }
}

function decrement(){
    count--;
    document.getElementById("currentNumber").innerHTML = count;
    if(count <= -10){
        document.getElementById("subtrair").remove();
    }
    if(count <= -1){
        document.getElementById("currentNumber").style.color = "red";
    }
    else if(count == 0){
        document.getElementById("currentNumber").style.color = "black";
    }
}

