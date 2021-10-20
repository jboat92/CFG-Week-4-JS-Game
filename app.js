alert("let's play");

favPet();
function favPet(){
    var answer=prompt("What is my favourite pet: lion, dog, cat?");
    if(answer=="cat"){
        alert("correct");
        return;
    }
    alert("wrong answer");
    favPet();  
}

favTeam();
function favTeam(){
    var answer=prompt("What is my favourite football team: arsenal, westham, manchester united");
    if(answer=="manchester united"){
        alert("correct");
        return;
    }
    alert("wrong answer");
    favTeam();  
}

favColor();
function favColor(){
    var answer=prompt("What is my favourite color: red, orange, green");
    if(answer=="orange"){
        alert("correct");
        return;
    }
    alert("wrong answer");
    favColor();  
}

alert("great, now you know more about me");

