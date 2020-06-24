// javascript
document.getElementById("message").innerHTML += "<p>Hello JS Functions</p>";

//simple function statement
function displayMessage(){
    document.getElementById("message").innerHTML += "<p>I am a fun function </p>";
}





//birthday function
displayMessage();

function happyBirthday(birthdayName){
    document.getElementById("birthdaymessage").innerHTML="<h4> Happy Birthday</h4>";
    document.getElementById("birthdaymessage").innerHTML += birthdayName;
}


var nextTurn ="X";

function takeTurn(){
    
    if(nextTurn=="X"){
        event.target.innerHTML="X";
        nextTurn ="O";
        
    }else{ 
        event.target.innerHTML="O";
        nextTurn ="X";
    }
    

}

function reset(){
    nextTurn = "X";
    
    var tiles = document.getElementsByClassName("tile");
    
    for (i in tiles){
        tiles[i].innerHTML = "";
    }
}





