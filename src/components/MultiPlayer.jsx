import React, {useState} from 'react';
import Result from "./Result";
import paperImage from  "../assets/paper.PNG"
import rockImage from "../assets/rock.PNG"
import scissorImage from "../assets/scissor.PNG"

const MultiPlayer = (props) => {

    const [player1Choice, setPlayer1Choice] = useState(null);
    const [player2Choice, setPlayer2Choice] = useState(null);


    let resultMatch;
    if (player1Choice === 'rock' && player2Choice === 'scissors') {
        resultMatch = props.player1Name+' Win';
    } else if (player1Choice === 'paper' && player2Choice === 'rock') {
        resultMatch = props.player1Name+' Win';
    } else if (player1Choice === 'scissors' && player2Choice === 'paper') {
        resultMatch = props.player1Name+' Win';
    } else if (player1Choice === player2Choice) {
        resultMatch = 'Match is tie. There is no winner';
    } else {
        resultMatch = props.player2Name+' Win';
    }

    return (
        <div>
            <p>{props.player1Name}: <strong>{player2Choice ? player1Choice : '?'}</strong></p>
            <p>{props.player2Name}: <strong>{player2Choice || '?'}</strong></p><hr/>

            {player2Choice===null ?
                (<div>
                    <button onClick={() => setPlayer1Choice('rock')}>{props.player1Name} <img height={100} width={100} alt={"rock"} src={rockImage}/></button>
                    <button onClick={() => setPlayer1Choice('paper')}>{props.player1Name} <img height={100} width={100} alt={"rock"} src={paperImage}/></button>
                    <button onClick={() => setPlayer1Choice('scissors')}>{props.player1Name} <img height={100} width={100} alt={"rock"} src={scissorImage}/></button>
                    <hr />

                    { player1Choice &&
                        (<div>
                            <button onClick={() => setPlayer2Choice('rock')}>{props.player2Name} <img height={100} width={100} alt={"rock"} src={rockImage}/></button>
                            <button onClick={() => setPlayer2Choice('paper')}>{props.player2Name} <img height={100} width={100} alt={"rock"} src={paperImage}/></button>
                            <button onClick={() => setPlayer2Choice('scissors')}>{props.player2Name} <img height={100} width={100} alt={"rock"} src={scissorImage}/></button>
                        </div>)}
                </div>) : <Result resultMatch={resultMatch}></Result>}
        </div>

    );
}
export default MultiPlayer;