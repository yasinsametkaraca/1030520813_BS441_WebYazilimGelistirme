import './App.css';

import React, { useState } from 'react';
import SinglePlayer from "./components/SinglePlayer";
import MultiPlayer from "./components/MultiPlayer";

const App = () => {

    const [mode, setMode] = useState('home');

    return (
        <div>
            <h3>Rock Paper Scissors Game</h3>
            {mode === 'home' && (
                <div>
                    <p>Choose a game mode:</p>
                    <button onClick={() => setMode('singlePlayer')}>Single Player</button>
                    <button onClick={() => setMode('multiPlayer')}>Multiplayer</button>
                </div>
            )}
            {mode === 'singlePlayer' && (
               <SinglePlayer></SinglePlayer>
            )}
            {mode === 'multiPlayer' && (
                <MultiPlayer></MultiPlayer>
            )}
            <br/>
            {mode !== 'home' && (
                <div>
                    <button onClick={() => setMode('home')}>Return Back to Menu</button>
                </div>
            )}
        </div>
    );
}

export default App;