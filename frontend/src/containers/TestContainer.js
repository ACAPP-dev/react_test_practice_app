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

    handleTestData = (data) => {
        this.setState({testQuestions: data})
        this.setState({
            testSubject: data[0].category,
            testDifficulty: data[0].difficulty,
            testLength: data.length
        })

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
        const correctAnswer = this.state.testQuestions[event.target.getAttribute('data-question')].correct_answer
        const newTestResultArry = this.state.testResult

        if (submittedAnswer === correctAnswer) {
            console.log('Correct Answer!')
            
            newTestResultArry[questionNumber] = {
                correct: 1,
                answer: submittedAnswer
            }

            this.setState({testResult: newTestResultArry})
            event.currentTarget.parentElement.classname = 'correct'
        } else {
            console.log('Incorrect Answer!!')
            newTestResultArry[questionNumber] = {
                correct: 0,
                answer: submittedAnswer
            }

            this.setState({testResult: newTestResultArry})
            
        }
    }

    render() {
        return (
            <div>
                < TestLoad returnTestData={this.handleTestData} />
                <h2>{`Test Your Knowledge of: need from state`}</h2>
                <div>
                    {this.createCards()}
                </div>
            </div>
        )
    }




}