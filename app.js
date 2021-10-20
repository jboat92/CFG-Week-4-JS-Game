

favPet();
function favPet(){
    var answer=prompt("What is my favourite pet: lion, dog, cat?");
    if(answer=="cat"){
        alert("correct");
        return;
    }
    alert("wrong answer");
    ask();  
}

favTeam();
function favTeam(){
    var answer=prompt("What is my favourite football team: arsenal, westham, manchester united");
    if(answer=="manchester united"){
        alert("correct");
        return;
    }
    alert("wrong answer");
    ask();  
}

favColor();
function favColor(){
    var answer=prompt("What is my favourite color: red, orange, green");
    if(answer=="orange"){
        alert("correct");
        return;
    }
    alert("wrong answer");
    ask();  
}

alert("great, now you know more about me");

