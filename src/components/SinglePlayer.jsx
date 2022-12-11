import React, {useState} from 'react';
import Result from "./Result";
import paperImage from  "../assets/paper.PNG"
import rockImage from "../assets/rock.PNG"
import scissorImage from "../assets/scissor.PNG"

const SinglePlayer = (props) => {
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
        resultMatch = 'Computer Win';
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        resultMatch = 'Computer Win';
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        resultMatch = 'Computer Win';
    } else if (computerChoice === playerChoice) {
        resultMatch = 'Match is tie. There is no winner';
    } else {
        resultMatch = props.playerName+ ' Win';
    }

    return (
        <div>
            <p>Computer: <strong>{playerChoice && computerChoice}</strong></p>
            <p>{props.playerName}: <strong>{playerChoice}</strong></p><hr />

            { playerChoice===null ?
                (<div>
                    <button onClick={() => setPlayerChoice('rock')}><img height={100} width={100} alt={"rock"} src={rockImage}/></button>
                    <button onClick={() => setPlayerChoice('paper')}><img height={100} width={100} alt={"rock"} src={paperImage}/></button>
                    <button onClick={() => setPlayerChoice('scissors')}><img height={100} width={100} alt={"rock"} src={scissorImage}/></button>
                </div>
                ) : <Result resultMatch={resultMatch}></Result>}
        </div>

    );
}

export default SinglePlayer;