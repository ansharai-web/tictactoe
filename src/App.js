import React from 'react';
import {TicTacToe} from './game/TicTacToe'

function test() {
return navigator.maxTouchPoints && navigator.maxTouchPoints > 1 ? "DA" :"NU
}
function App() {
  return (
    <div>
    {test()}
        <React.StrictMode>
            <TicTacToe/>
        </React.StrictMode>
    </div>
  );
}

export default App;
