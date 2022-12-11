import React, {useState} from 'react';
import MultiPlayer from "./MultiPlayer";
import SinglePlayer from "./SinglePlayer";

const PlayerData = (props) => {

    const [player1Name,setPlayer1Name] = useState("Player 1");
    const [player2Name,setPlayer2Name] = useState("Player 2");
    const [game,setGame] = useState(false);

    if (game && props.gameType==="single") {
        return (
            <div>
                <SinglePlayer playerName={player1Name}></SinglePlayer>
            </div>
        )
    }

    if (game && props.gameType==="multi") {
        return (
            <div>
               <MultiPlayer player1Name={player1Name} player2Name={player2Name}></MultiPlayer>
            </div>
        )
    }

    return (
        <div>
            <input size={20} placeholder={props.gameType==="multi" ? "First Player Name" : "Player Name"} type="text"  onChange={(e) => setPlayer1Name(e.target.value)}/>
            {props.gameType==="multi" && <input type="text" placeholder={"Second Player Name"} onChange={(e) => setPlayer2Name(e.target.value)}/>}
            <button onClick={() => setGame(true)}>Start Game</button>
        </div>
    );
}

export default PlayerData;