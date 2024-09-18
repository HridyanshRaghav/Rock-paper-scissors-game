let userScore = 0;
let compScore = 0;
let darkmode = localStorage.getItem('darkmode');


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const mode =document.getElementById('mode');
const genCompChoice = () => {
    const options = ["rock","paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game draw!.play again";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`computer win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
  console.log("user choice = ", userChoice);
  //generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

if (userChoice === compChoice){
drawGame();
} else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper"? false : true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissor"? false : true;
    }else {
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
   playGame(userChoice, );    
});
});


const enableDarkmode = () =>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
};

const disableDarkmode = () =>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
};
if(darkmode === "active") enableDarkmode()

mode.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode():disableDarkmode()
    //if(darkmode !=="active"){
    //enableDarkmode()
    //}else{
    //disableDarkmode()
    //}

});

