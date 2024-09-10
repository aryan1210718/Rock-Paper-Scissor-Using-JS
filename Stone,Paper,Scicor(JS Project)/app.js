let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")


//to brought scorces
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const gencompchoice=()=>{
    const options=["stone","paper","scissor"];
    const randidx=Math.floor(Math.random() * 3);
    return options[randidx];
}


const draw=()=>{
    // console.log("Game draw");
    msg.innerText="Game is Draw,Play again."
    msg.style.backgroundColor="8b635c";

}

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You Won");
        msg.innerText=`Yay,You Won. Your ${userchoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You Lost")
        msg.innerText=`You Lost.${userchoice} Defeats from  Computer ${compChoice} `;
        msg.style.backgroundColor="red";

        }

}

const playgame=(userchoice)=>{
    console.log("User Choice =",userchoice);
   // generting Computer Choice
    const compChoice=gencompchoice();
    console.log("comp choice" ,compChoice);

    if(userchoice===compChoice){
        //draw
        draw();

    }else{
        let userWin=true;
        if(userchoice==="stone"){
            userWin= compChoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="stone"?false:true;
        }

        showWinner(userWin,userchoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    })
})