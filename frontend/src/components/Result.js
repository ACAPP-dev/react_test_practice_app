import React from 'react'
import Button from 'react-bootstrap/Button'

const Result = props => {
    return (
        <>
            <h2>Your Test Score</h2>
            <p>Number Correct: {props.correct}</p>
            <p>Score: {props.score}</p>
            <Button onClick={props.returnResult} variant="success">
                Save Test Results
            </Button>
        </>
    )
}

export default Result