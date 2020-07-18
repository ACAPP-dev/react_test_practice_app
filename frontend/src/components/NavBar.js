import React from 'react'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import User from './User'
import { NavLink } from 'react-router-dom'

export default class NavBarComponent extends React.Component {
    
    userIsLoggedIn = () => {
        return (
            <>
            <Nav className='mr-auto'></Nav>
            <Nav className='mr-auto'>
                <Nav.Link>{this.props.name}</Nav.Link>
            </Nav>
            <Nav className='mr-auto'>
                <Button variance='outline-info'>
                    <NavLink to="/logout" exact>Log Out</NavLink>
                </Button>
            </Nav>
           
            </>
        )

    }

    userNotLoggedIn = () => {
        return (
            <Nav className='mr-auto'>
            {/* <Button variance='outline-info'> */}
                <NavLink to="/login" exact>Log In</NavLink>
            {/* </Button> */}
        </Nav>
        )
    }

    render() {
        return( 
        <>
            <Navbar bg='dark' variant='dark' className='justify-content-between'>
                <Navbar.Brand>Andrew's React Test App</Navbar.Brand>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/test" exact>Take Test</NavLink>
                {this.props.loggedIn ? <this.userIsLoggedIn /> : <this.userNotLoggedIn />}
            </Navbar>
        
        </>
        )
    }
}