import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Test from './Test'

export default class User extends React.Component {
    state = {
        questions: 10,
        category: "9",
        difficulty: "medium",
        testData: []
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
                console.log(json)
                this.setState({testData: json.results})
                console.log(this.state.testData)
            })
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

                < Test testData={this.state} />
            </>
        )
    }
}