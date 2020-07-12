import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class TestLoad extends React.Component {
    state = {
        questions: 10,
        category: "9",
        difficulty: "medium",
    }

    makeTestArry = (testQuestions) => {
        return testQuestions.map((question) => {
            return this.makeTestQuestionObject(question)

        })
     }

    handleFormChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLoadTest(event) {
        event.preventDefault()

        const testURL = `https://opentdb.com/api.php?amount=${this.state.questions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`

        fetch(testURL)
            .then(resp => resp.json())
            .then(json => {
                console.log(`Results from fetch:`)
                console.log(json.results)
                // Need to make array of test questions and return array to TestContainer
                return this.props.returnTestQuestionArry(
                    this.makeTestArry(json.results),
                    json.results[0].category,
                    json.results[0].difficulty,
                    json.results.length
                )
                // const testArry = this.makeTestArry(json.results)
                // console.log('return value of makeTestArry in fetch:')
                // console.log(testArry)
            })
    }

    makeTestQuestionObject = (question) => {
            const randomNum = Math.floor(Math.random() * 4)

            switch(randomNum) {
                case 0:
                    return {question: question.question,
                        correctAnswerIndex: 0, 
                        answers: [
                            question.correct_answer, 
                            question.incorrect_answers[0], 
                            question.incorrect_answers[1], 
                            question.incorrect_answers[2]
                        ]
                    }
                case 1:
                    return {question: question.question,
                        correctAnswerIndex: 1, 
                        answers: [
                            question.incorrect_answers[1],
                            question.correct_answer, 
                            question.incorrect_answers[0],  
                            question.incorrect_answers[2]
                        ]
                    }
                case 2:
                    return {question: question.question,
                        correctAnswerIndex: 2, 
                        answers: [
                            question.incorrect_answers[2],
                            question.incorrect_answers[1],
                            question.correct_answer, 
                            question.incorrect_answers[0]
                        ]
                    }
                case 3:
                    return {question: question.question,
                        correctAnswerIndex: 3, 
                        answers: [
                            question.incorrect_answers[0],
                            question.incorrect_answers[2],
                            question.incorrect_answers[1],
                            question.correct_answer
                        ]
                    }
            }
        }

    render() {

        return (
            <>
                <h2>Select Parameters for Test</h2>
                <Form id='formTestParameters'>
                    <Form.Group controlId='formTestSelectNumber'>
                        <Form.Label>Number of Questions</Form.Label>
                        <Form.Control onChange={event => this.handleFormChange(event)} name='questions' value={this.state.questions} as='select' custom>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formTestSelectCategory'>
                        <Form.Label>Test Category</Form.Label>
                        <Form.Control onChange={event => this.handleFormChange(event)} name='category' value={this.state.category} as='select' custom>
                            <option value='9'>General Knowledge</option>
                            <option value='10'>Entertainment: Books</option>
                            <option value='11'>Entertainment: Film</option>
                            <option value='17'>Science & Nature</option>
                            <option value='18'>Science: Computers</option>
                            <option value='26'>Celebrities</option>
                            <option value='28'>Vehicles</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group key='formCheckDifficulty' controlId='formTestCheckDifficulty'>
                        <Form.Label>Question Difficulty </Form.Label>
                        <Form.Control onChange={event => this.handleFormChange(event)} name='difficulty' value={this.state.difficulty} as='select' custom>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={event => this.handleLoadTest(event)} variance='outline-info'>Load Test</Button>
                </Form>
            </>
        )
    }
}