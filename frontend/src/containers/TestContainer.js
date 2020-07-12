import React from 'react'
import TestLoad from '../components/TestLoad'
import TestCard from '../components/TestCard'

export default class TestContainer extends React.Component {
    
    state = {
        testSubject: "",
        testDifficulty: "",
        testLength: 0,
        testQuestions: [],
        testResult: []
    }

    handleTestData = (testQuestionArry, testSubject, testDifficulty, testLength) => {
        this.setState({
            testQuestions: testQuestionArry,
            testSubject: testSubject,
            testDifficulty: testDifficulty,
            testLength: testLength
        })
        console.log('TestContainer State after fetch and create questions array:')
        console.log(this.state)
    }

    createCards = () => {
        return this.state.testQuestions.map((card, index) => {
            
            return (
                < TestCard returnAnswerClick={this.handleAnswerClick} cardData={card} questionIndex={index} />
            )
        })
    }

    handleAnswerClick = (event) => {
        const questionNumber = event.target.getAttribute('data-question')
        const submittedAnswer = event.target.getAttribute('data-answer')
        const correctAnswerNumber = this.state.testQuestions[questionNumber].correctAnswerIndex
        const correctAnswer = this.state.testQuestions[questionNumber].answers[correctAnswerNumber]
        const newTestResultArry = this.state.testResult

        if (submittedAnswer === correctAnswer) {
            console.log('Correct Answer!')
            
            newTestResultArry[questionNumber] = {
                correct: 1,
                answer: submittedAnswer
            }

            this.setState({testResult: newTestResultArry})
            event.currentTarget.parentElement.classList.add('correct')
        } else {
            console.log('Incorrect Answer!!')
            newTestResultArry[questionNumber] = {
                correct: 0,
                answer: submittedAnswer
            }

            this.setState({testResult: newTestResultArry})
            event.currentTarget.parentElement.classList.add('wrong')
        }
    }

    render() {
        return (
            <div>
                < TestLoad returnTestQuestionArry={this.handleTestData} />
                <h2>{`Test Your Knowledge of: need from state`}</h2>
                <div>
                    {this.createCards()}
                </div>
            </div>
        )
    }




}