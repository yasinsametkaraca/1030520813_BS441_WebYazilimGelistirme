import React, {useState} from 'react';
import Result from "./Result";

const SinglePlayer = () => {

    const [playerChoice, setPlayerChoice] = useState(null);

    const randomComputerChoice = Math.floor(Math.random()*3);
    let computerChoice;
    if (randomComputerChoice === 0 ) {
        computerChoice = 'rock';
    } else if (randomComputerChoice === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    let resultMatch;
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        resultMatch = 'computer win';
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        resultMatch = 'computer win';
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        resultMatch = 'computer win';
    } else if (computerChoice === playerChoice) {
        resultMatch = 'Match is tie. There is no winner';
    } else {
        resultMatch = 'player win';
    }

    return (
        <div>
            <p>Computer: <strong>{playerChoice && computerChoice}</strong></p>
            <p>Player: <strong>{playerChoice}</strong></p>

            { playerChoice===null ?
                (<div>
                    <button onClick={() => setPlayerChoice('rock')}>Rock</button>
                    <button onClick={() => setPlayerChoice('paper')}>Paper</button>
                    <button onClick={() => setPlayerChoice('scissors')}>Scissors</button>
                </div>
                ) : <Result resultMatch={resultMatch}></Result>}
        </div>

    );
}

export default SinglePlayer;