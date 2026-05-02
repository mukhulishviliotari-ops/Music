const background =document.body;

const elements = ["rock", "paper", "scissor"];
const buttons = document.querySelectorAll(".button");
const resultDiv = document.getElementById("result");

buttons.forEach(btn =>{
    btn.addEventListener("click", ()=> {
    const playerChoice = btn.textContent; // consistent spelling
    const randomIndex = Math.floor(Math.random() * elements.length);
    const computerChoice = elements[randomIndex];

        let winner = "";
        if(playerChoice === computerChoice) {
            winner = "its a tie!";
        }else if (
  (playerChoice === "rock" && computerChoice === "scissor") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissor" && computerChoice === "paper")
) {
    winner = "U win!";
    document.body.style.backgroundColor = "green";
}else{
    winner = "computer Wins"
    document.body.style.backgroundColor = "red";
}
resultDiv.textContent = `you chose: ${playerChoice}   computer chose: ${computerChoice} ---> ${winner}`;

    });
});
