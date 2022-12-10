import React, {useState} from 'react';
import Result from "./Result";
import paperImage from  "../assets/paper.PNG"
import rockImage from "../assets/rock.PNG"
import scissorImage from "../assets/scissor.PNG"

const MultiPlayer = () => {

    const [player1Choice, setPlayer1Choice] = useState(null);
    const [player2Choice, setPlayer2Choice] = useState(null);


    let resultMatch;
    if (player1Choice === 'rock' && player2Choice === 'scissors') {
        resultMatch = 'Player 1 Win';
    } else if (player1Choice === 'paper' && player2Choice === 'rock') {
        resultMatch = 'Player 1 Win';
    } else if (player1Choice === 'scissors' && player2Choice === 'paper') {
        resultMatch = 'Player 1 Win';
    } else if (player1Choice === player2Choice) {
        resultMatch = 'Match is tie. There is no winner';
    } else {
        resultMatch = 'Player 2 Win';
    }

    return (
        <div>
            <p>Player 1: <strong>{player2Choice ? player1Choice : '?'}</strong></p>
            <p>Player 2: <strong>{player2Choice || '?'}</strong></p>

            {player2Choice===null ?
                (<div>
                    <button onClick={() => setPlayer1Choice('rock')}>Player 1 <img height={100} width={100} alt={"rock"} src={rockImage}/></button>
                    <button onClick={() => setPlayer1Choice('paper')}>Player 1 <img height={100} width={100} alt={"rock"} src={paperImage}/></button>
                    <button onClick={() => setPlayer1Choice('scissors')}>Player 1 <img height={100} width={100} alt={"rock"} src={scissorImage}/></button>
                    <hr />

                    { player1Choice &&
                        (<div>
                            <button onClick={() => setPlayer2Choice('rock')}>Player 2 <img height={100} width={100} alt={"rock"} src={rockImage}/></button>
                            <button onClick={() => setPlayer2Choice('paper')}>Player 2 <img height={100} width={100} alt={"rock"} src={paperImage}/></button>
                            <button onClick={() => setPlayer2Choice('scissors')}>Player 2 <img height={100} width={100} alt={"rock"} src={scissorImage}/></button>
                        </div>)}
                </div>) : <Result resultMatch={resultMatch}></Result>}
        </div>

    );
}
export default MultiPlayer;