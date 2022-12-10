import React, { useState} from 'react';
import rockImage from "../assets/rock.PNG";
import paperImage from "../assets/paper.PNG";
import scissorImage from "../assets/scissor.PNG";

const ThreeWin = ({scoreCount}) => {

    const choices = ['rock', 'paper', 'scissors'];

    const [playerChoice, setPlayerChoice] =  useState("");
    const [playerScore, setPlayerScore] =  useState(0);
    const [computerChoice, setComputerChoice] = useState("");
    const [computerScore, setComputerScore] = useState(0);

    const randomChoice = () => {
        return choices[Math.floor(Math.random() * choices.length)];
    }
    const handleChoice = (playerChoice) => {
        let computerChoice = randomChoice();
        setPlayerChoice(playerChoice)
        setComputerChoice(computerChoice)
        if((computerChoice === 'rock' && playerChoice === 'scissors') || (computerChoice === 'paper' && playerChoice === 'rock') || (computerChoice === 'scissors' && playerChoice === 'paper')) {
            setComputerScore(computerScore+1);
        } else if ((computerChoice === 'scissors' && playerChoice === 'rock') || (computerChoice === 'rock' && playerChoice === 'paper') || (computerChoice === 'paper' && playerChoice === 'scissors')) {
            setPlayerScore(playerScore+1);
        }
    }

    if(computerScore === scoreCount){
        return (
            <div>
                <p>Player Score : {playerScore}</p>
                <p>Computer Score: {computerScore}</p>
                <strong>Computer Win. You Lost...</strong>
            </div>
        )
    }else if (playerScore === scoreCount){
        return (
            <div>
                <p>Player Score : {playerScore}</p>
                <p>Computer Score : {computerScore}</p>
                <strong>You Win...</strong>
            </div>
        )
    }
    return (
        <div>
            <div>
                <p>Player Choice : {playerChoice}</p>
                <p>Computer Choice : {computerChoice}</p>
            </div>
            <div>
                <p>Player Score : {playerScore}</p>
                <p>Computer Score: {computerScore}</p>
            </div>
            <div>
                <button onClick={() => handleChoice('rock')}><img height={100} width={100} alt={"rock"} src={rockImage}/></button>
                <button onClick={() => handleChoice('paper')}><img height={100} width={100} alt={"paper"} src={paperImage}/></button>
                <button onClick={() => handleChoice('scissors')}><img height={100} width={100} alt={"scissors"} src={scissorImage}/></button>
            </div>
        </div>
    );
}
export default ThreeWin