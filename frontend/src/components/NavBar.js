import React from 'react'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default class NavBarComponent extends React.Component {
    state = {
        username: "",
        password: "",
        name: "",
        loggedIn: false,
        results: []
    }
    
    handleLogin = (event) => {
        event.preventDefault()
        const userData = {username: this.state.name, password: this.state.password}

        
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    userIsLoggedIn = () => {
        return (
            <>
            <Nav className='mr-auto'></Nav>
            <Nav className='mr-auto'>
                <Nav.Link>Username Here</Nav.Link>
            </Nav>
            <Nav className='mr-auto'>
                <Button variance='outline-info'>Log Out</Button>
            </Nav>
            </>
        )

    }

    userNotLoggedIn = () => {
        return (
            <Form inline>
                <FormControl onChange={event => this.handleChange(event)} type='text' value={this.state.name} placeholder='UserName' name='name' className='mr-sm-2' />
                <FormControl onChange={event => this.handleChange(event)} type='password' placeholder='Password' name='password' className='mr-sm-2' />
                <Button onClick={event => this.handleLogin(event)} variant='outline-info'>Log In</Button>
            </Form>
        )
    }

    render() {
        return( 
        <>
            <Navbar bg='dark' variant='dark' className='justify-content-between'>
                <Navbar.Brand>Andrew's React Test App</Navbar.Brand>
                {this.state.loggedIn ? <this.userIsLoggedIn /> : <this.userNotLoggedIn />}
            </Navbar>
        
        
        
        
        </>
        )
    }


}