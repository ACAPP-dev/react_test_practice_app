import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default class Test extends React.Component {

    createTestCards(cardData) {
        const randomNum = Math.floor(Math.random() * 4)

        return (
            <Card className='card'>
                <Card.Body>
                    <Card.Title>{cardData.question}</Card.Title>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>{randomNum}</ListGroup.Item>
                        <ListGroup.Item>{randomNum}</ListGroup.Item>
                        <ListGroup.Item>{randomNum}</ListGroup.Item>
                        <ListGroup.Item>{randomNum}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }

    render() {
        console.log(this.props.testData)
        return (
            <>

                <h2>{`Test Your Knowledge of: ${this.props.testData.category}`}</h2>
                <div>
                    {this.props.testData.testData.map(card => this.createTestCards(card))}
                </div>
            </>
        )
    }
}