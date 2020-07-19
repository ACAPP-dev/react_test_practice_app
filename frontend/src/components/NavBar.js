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
                <span id="user-name-span" >{this.props.name}</span>
            </Nav>
            <Nav className='mr-auto'>
                <NavLink onClick={this.props.returnLogout} to="/" exact>Log Out</NavLink>
            </Nav>
            </>
        )

    }

    userNotLoggedIn = () => {
        return (
            <Nav className='mr-auto'>
                <NavLink to="/login" exact>Log In</NavLink>
            </Nav>
        )
    }

    render() {
        return( 
        <>
            <Navbar bg='dark' variant='dark' className='justify-content-between'>
                <Navbar.Brand>Andrew's React Test App</Navbar.Brand>
                <Nav className='mr-auto'>
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/test" exact>Take Test</NavLink>
                </Nav>
                {this.props.loggedIn ? <this.userIsLoggedIn /> : <this.userNotLoggedIn />}
            </Navbar>
        
        </>
        )
    }
}