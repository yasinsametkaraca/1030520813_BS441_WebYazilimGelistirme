import React, {useState} from 'react';
import SingleWithScore from "./SingleWithScore";

const ScoreCount = () => {

    const [count,setCount] = useState(1);
    const [game,setGame] = useState(false)

    const handleCount = (count) => {
        setCount(count);
        setGame(true)
    }

    if(game){
        console.log(count)
        return (
            <SingleWithScore scoreCount={count}></SingleWithScore>
        )
    }
    return (
        <div className={"center"}>
            <p>Oyun Skor Kaç Oldugunda Bitsin İstersiniz?</p>
            <div>
                <button onClick={() => handleCount(1)}>1</button>
                <button onClick={() => handleCount(2)}>2</button>
                <button onClick={() => handleCount(3)}>3</button>
                <button onClick={() => handleCount(4)}>4</button>
                <button onClick={() => handleCount(5)}>5</button>
            </div>
        </div>
    );
};

export default ScoreCount;
