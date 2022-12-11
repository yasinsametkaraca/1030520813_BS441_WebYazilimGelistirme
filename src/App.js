import './App.css';
import React, { useState } from 'react';
import SinglePlayer from "./components/SinglePlayer";
import MultiPlayer from "./components/MultiPlayer";
import ThreeWin from "./components/ThreeWin";
import Count from "./components/Count";
import PlayerData from "./components/PlayerData";

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
                        <span>
                            <button className={"button"} onClick={() => setMode('whichWin')}>Which Wins</button>
                        </span>
                    </div>
                </div>
            )}
            {mode === 'singlePlayer' && (
               <SinglePlayer></SinglePlayer>
            )}
            {mode === 'multiPlayer' && (
                <PlayerData></PlayerData>
            )}
            {mode === 'threeWin' && (
                <ThreeWin scoreCount={3}></ThreeWin>
            )}
            {mode === 'whichWin' && (
                <Count></Count>
            )}
            <br/>
            {mode !== 'home' && (
                <div>
                    <button className={"button"} onClick={() => setMode('home')}>Return Back to Menu</button>
                </div>
            )}

            <p>Oyunumuzda 4 Tane Oyun Modu vardır. Birinci oyun modunde tek başınıza bilgisayara karşı oynuyorsunuz ve sadece tek turdan oluşmaktadır. 2. Oyun modu iki oyuncunun birlikte oynayabileceği bir oyun modudur ve tek turdan oluşmaktadır. 3. oyun modunda ise 3 yapan kazanır. 4. oyun modunda ise oyunun kaçta biteceğini siz belirliyosunuz. Kolay Gelsin...</p>
        </div>
    );
}
export default App;