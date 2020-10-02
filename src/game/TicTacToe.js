import React from 'react'
import {Game} from './components/Game'


const GameContainerFC = props => {

    const {} = props

    return (
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
            <header >
                <h1 > Tic tac toe</h1>
            </header>
        </div>
            <Game/>
   </>
    )
}

export const TicTacToe = GameContainerFC
