import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

export default class Test extends React.Component {

    createTestCard(cardData, questionIndex) {
        const randomNum = Math.floor(Math.random() * 4)
        let questionObj = {}

        switch(randomNum) {
            case 0:
                questionObj = {answer: 0, 
                    questions: [
                        cardData.correct_answer, 
                        cardData.incorrect_answers[0], 
                        cardData.incorrect_answers[1], 
                        cardData.incorrect_answers[2]
                    ]
                }
                break;
            case 1:
                questionObj = {answer: 1, 
                    questions: [
                        cardData.incorrect_answers[1],
                        cardData.correct_answer, 
                        cardData.incorrect_answers[0],  
                        cardData.incorrect_answers[2]
                    ]
                }
            break;
            case 2:
                questionObj = {answer: 2, 
                    questions: [
                        cardData.incorrect_answers[2],
                        cardData.incorrect_answers[1],
                        cardData.correct_answer, 
                        cardData.incorrect_answers[0]
                    ]
                }
            break;
            case 3:
                questionObj = {answer: 3, 
                    questions: [
                        cardData.incorrect_answers[0],
                        cardData.incorrect_answers[2],
                        cardData.incorrect_answers[1],
                        cardData.correct_answer
                    ]
                }
            break;
        }
        return (
            <Card key={questionIndex} className='card'>
                <Card.Body>
                    <Card.Title>{cardData.question}</Card.Title>
                    <ListGroup>
                        {questionObj.questions.map((question, index) => {
                            return(
                                <ListGroup.Item>
                                    <Button data-question={questionIndex} onClick={this.handleClick} variant='secondary'>{index + 1}</Button>{' '}
                                    {question}
                                </ListGroup.Item>)
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }

    handleClick = (event) => {
        console.log(`Button ${event.target.innerText} for question ${event.target.getAttribute('data-question')} clicked`)
        console.log(event)
        
    }

    render() {
        console.log(this.props.testData)
        return (
            <>
                <h2>{`Test Your Knowledge of: ${this.props.testData.category}`}</h2>
                <div>
                    {this.props.testData.testData.map((card, index) => this.createTestCard(card, index))}
                </div>
            </>
        )
    }
}