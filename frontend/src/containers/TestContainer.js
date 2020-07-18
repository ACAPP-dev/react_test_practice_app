import React from 'react'
import NavBarComponent from '../components/NavBar'
import User from '../components/User'
import TestLoad from '../components/TestLoad'
import TestCard from '../components/TestCard'
import Result from '../components/Result'

export default class TestContainer extends React.Component {
    
    state = {
        user: {},
        testId: "",
        testSubject: "",
        testDifficulty: "",
        testLength: 0,
        testQuestions: [],
        testResult: []

    }

    handleTestData = (testQuestionArry, testSubject, testDifficulty, testLength) => {
        this.setState({
            testId: Math.floor(Math.random() * 100),
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
        
        if (!this.state.testResult[questionNumber]) {
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
    }

    handleUserData = (data) => {
        this.setState({user: data})
        console.log(this.state.user)

    }

    displayResults = () => {
        if (this.state.testResult.length > 0 && this.state.testResult.length === this.state.testQuestions.length) {
            const questionsCorrect = this.state.testResult.filter(question => {
                return question.correct === 1
            })
            const calcScore = questionsCorrect.length / this.state.testResult.length

            const configObj = {
                method: "POST",
                headers: {"Content-Type": "application/json", "Accept": "application/json"},
                Body: JSON.stringify({
                    test_id: this.state.testId,
                    test_subject: this.state.testSubject,
                    test_difficulty: this.state.test_difficulty,
                    test_score: calcScore
                })
            }

            //need to complete fetch to post test results to user

            return < Result correct={questionsCorrect.length} score={calcScore} />
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
                <div>
                    {this.displayResults()}
                </div>
            </div>
        )
    }




}