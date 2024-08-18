let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg"); 

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#computer-score");

const gencompChoices=()=> {
     const options=["rock","paper","scissor"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
}

const drawgame= () =>{
    console.log("game was draw.");
    msg.innerText = "DRAW!";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText = `YOU LOSE! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame=(userChoice) =>{
     console.log("userchoice=",userChoice);
     //generate computer choice ->modular
     const compChoice=gencompChoices();
     console.log("compchoice=",compChoice);

     if(userChoice===compChoice){
        drawgame();
     }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice ==="paper"?false:true;
        }else if (userChoice==="paper"){
            userWin = compChoice ==="scissor"?false:true;
        }else{
            userWin = compChoice ==="rock"?false:true;
        }
          showWinner(userWin,userChoice,compChoice);
        }
};

choices.forEach((choice) => {
choice.addEventListener("click",() =>  {
    const userChoice=choice.getAttribute("id");
    playgame(userChoice)
   });
});