function comchoice() {
    let random = Math.floor(Math.random() * 3);
     switch(random){
         case 0 :
             computerchoice = "rock"
            break;
         case 1 :
             computerchoice = "paper"
            break;
         case 2 :
             computerchoice = "scissor"
            break;
        }
        alert(computerchoice)
        return(computerchoice);
 }
 
function ref(playerchoice, computerchoice) {
    if((playerchoice == 'rock' && computerchoice == 'scissor')||
        (playerchoice == 'paper' && computerchoice == 'rock')||
        (playerchoice == 'scissor' && computerchoice == 'paper')){
            subresult = "win"
        } else  if((playerchoice == 'rock' && computerchoice == 'rock')||
        (playerchoice == 'paper' && computerchoice == 'paper')||
        (playerchoice == 'scissor' && computerchoice == 'scissor')){
            subresult = "draw"
        } else {
            subresult = "lose"
        }

    alert(subresult);
}


console.log("welcome to Rock Paper Scissor!!!!");
let i = 0;
let playerscore = 0;
let computerscore = 0;

function play(){
let playerchoice = prompt("choose your weapon! : ");
    comchoice();
    ref(playerchoice, computerchoice);
    if(subresult = "win"){
        playerscore++;
    } else{
        computerscore++;
    } 
    i++;
    
}

while(i < 5) {
    play(i)
}

alert("player total score " + playerscore)
alert("bot total score " + computerscore)