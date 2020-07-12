import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

export default class TestCard extends React.Component {

    createTestCard = () => {
        const questionIndex = this.props.questionIndex
        const question = this.props.cardData

        return (
            <Card key={questionIndex} className='card'>
                <Card.Body>
                    <Card.Title>{question.question}</Card.Title>
                    <ListGroup>
                        {question.answers.map((answer, index) => {
                            return(
                                <ListGroup.Item>
                                    <Button data-question={questionIndex} data-answer={answer} onClick={this.props.returnAnswerClick} variant='secondary'>{index + 1}</Button>{' '}
                                    {answer}
                                </ListGroup.Item>)
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <>
                {this.createTestCard()}
            </>
        )
    }
}