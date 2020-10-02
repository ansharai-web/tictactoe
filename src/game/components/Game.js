import React from 'react'
import './style/game-style.css'
import {Board} from './Board'
import {useGameLogic} from './game-logic'



export const Game = () => {
    const [status,selectSquare,currentSquares,restart,moves,winner] = useGameLogic()


    return (
        <div className="game">

            <div className="game-board">
                <Board onClick={selectSquare} squares={currentSquares}/>
                <div className='restart-container'>
                    <button className="restart" onClick={restart}>
                        {winner ? 'Start new game' : 'Restart'}
                    </button>
                </div>

            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}
