import './App.css';
import React, { useState } from 'react';
import SinglePlayer from "./components/SinglePlayer";
import MultiPlayer from "./components/MultiPlayer";
import ThreeWin from "./components/ThreeWin";


const App = () => {

    const [mode, setMode] = useState('home');

    return (
        <div className={"container"}>
            <h1>Rock Paper Scissors Game</h1>
            {mode === 'home' && (
                <div>
                    <div>
                        <p>Lutfen Bir Oyun Modu Seciniz</p>
                    </div>
                    <div className={"container"}>
                        <span>
                            <button className={"button"} onClick={() => setMode('singlePlayer')}>Single Player</button>
                        </span>
                        <span>
                            <button className={"button"} onClick={() => setMode('multiPlayer')}>Multi player</button>
                        </span>
                        <span>
                            <button className={"button"} onClick={() => setMode('threeWin')}>3 Wins</button>
                        </span>
                    </div>
                </div>
            )}
            {mode === 'singlePlayer' && (
               <SinglePlayer></SinglePlayer>
            )}
            {mode === 'multiPlayer' && (
                <MultiPlayer></MultiPlayer>
            )}
            {mode === 'threeWin' && (
                <ThreeWin></ThreeWin>
            )}
            <br/>
            {mode !== 'home' && (
                <div>
                    <button className={"button"} onClick={() => setMode('home')}>Return Back to Menu</button>
                </div>
            )}
        </div>
    );
}

export default App;