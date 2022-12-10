import React, { useState} from 'react';
import rockImage from "../assets/rock.PNG";
import paperImage from "../assets/paper.PNG";
import scissorImage from "../assets/scissor.PNG";

const ThreeWin = () => {
    const [player, setPlayer] =  useState({
        choice : null,
        score : 0
    });
    const [computerChoice, setComputerChoice] = useState(null);
    /*const [playerScore, setPlayerScore] = useState(0);*/
    const [computerScore, setComputerScore] = useState(0);

    const choices = ['rock', 'paper', 'scissors'];

    const randomChoice = () => {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    const handleChoice = (choice) =>{
        const computer = randomChoice();
        setPlayer(prev => ({
            ...prev,
            choice: choice
        }));
        setComputerChoice(computer);

        if (computerChoice === 'rock' && player.choice === 'scissors') {
            setComputerScore(computerScore+1)
        } else if (computerChoice === 'paper' && player.choice === 'rock') {
            setComputerScore(computerScore+1)
        } else if (computerChoice === 'scissors' && player.choice === 'paper') {
            setComputerScore(computerScore+1)
        } else if (computerChoice === player.choice) {
        } else {
            setPlayer(prev => ({
                ...prev,
                score: prev.score+1
            }))
        }
    }

    return (
        <div>
            <div>
                <p>Player Choice : {player.choice}</p>
                <p>Computer Choice : {computerChoice}</p>
            </div>
            <div>
                <p>Player Score : {player.score}</p>
                <p>Computer Score: {computerScore}</p>
            </div>
            <div>
                <button onClick={() => handleChoice('rock')}><img height={100} width={100} alt={"rock"} src={rockImage}/></button>
                <button onClick={() => handleChoice('paper')}><img height={100} width={100} alt={"rock"} src={paperImage}/></button>
                <button onClick={() => handleChoice('scissors')}><img height={100} width={100} alt={"rock"} src={scissorImage}/></button>
            </div>

        </div>
    );
}
export default ThreeWin