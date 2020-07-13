import React from 'react'

const Result = props => {
    return (
        <>
            <h2>Your Test Score</h2>
            <p>Number Correct: {props.correct}</p>
            <p>Score: {props.score}</p>
        </>
    )
}

export default Result