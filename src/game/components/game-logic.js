import {useLocalStorageState} from '../../utils/localStorageState'
import React from 'react'
function calculateNextValue(squares) {
    const xSquaresCount = squares.filter(r => r === 'X').length
    const oSquaresCount = squares.filter(r => r === 'O').length
    return oSquaresCount === xSquaresCount ? 'X' : 'O'
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        //deconstruct the values of the line at index i
        const [a, b, c] = lines[i]
        //if all values are the same we have a winner
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return  squares[a]
        }
    }
    return null
}

function calculateStatus(winner, squares,nextValue){
    return winner ? `Winner: ${winner}`:
        squares.every(Boolean) ?
            'Scartch: Cat\'s game': `Next player: ${nextValue}`
}

export const useGameLogic = () =>{
    const [history, setHistory] = useLocalStorageState('tic-tac-toe:history', [Array(9).fill(null)])
    const [currentStep, setCurrentStep] = useLocalStorageState('tic-tac-toe:step', 0)

    const currentSquares= history[currentStep]
    const nextValue = calculateNextValue(currentSquares)
    const winner = calculateWinner(currentSquares)
    const status = calculateStatus(winner, currentSquares, nextValue)


    function selectSquare(square) {
        if (winner || currentSquares[square]) {
            return
        }
        const newHistory = history.splice(0, currentStep +1)
        const squares = [...currentSquares]
        squares[square] = nextValue
        setHistory([...newHistory,squares])
        setCurrentStep(newHistory.length)

    }

    function restart() {
        setHistory([Array(9).fill(null)])
        setCurrentStep(0)
    }

    const moves = history.map((stepSquares,step) =>{
        const description = step ? `Go to move #${step}`: 'Go to game start'
        const isCurrentStep = step === currentStep

        return (
            <li key={step}>
                <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
                    {description} {isCurrentStep ? '(current)' : null}
                </button>
            </li>
        )
    })

    return [status,selectSquare,currentSquares,restart,moves,winner]
}
