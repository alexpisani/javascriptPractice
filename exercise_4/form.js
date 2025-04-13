
window.addEventListener('load', (event) =>{
     let gameScore = prompt("What was your score?");
     const averageScore = 50;
     let message = '';
     if (gameScore >= averageScore){
       message = "WOW, you scored Higher than most gamers";
     } else {
       message = "Better luck next time!";
     }
     document.getElementById("gameList").innerHTML = message;
     });