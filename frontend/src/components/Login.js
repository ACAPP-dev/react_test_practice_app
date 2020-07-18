import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
    
    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleLogin = (event) => {
        event.preventDefault()
        const userData = {username: this.state.username, password: this.state.password}
        const configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        }
        
        fetch("http://localhost:3000/sessions", configObject)
            .then(resp=>resp.json())
            .then(json=>{
                {this.props.returnLogin(json)}
            })
    }


    render() {
        return (
            <div>
                <h2>Log In to Load Test</h2>
                <Form className='form'>
                    <FormControl onChange={event => this.handleChange(event)} type='text' value={this.state.username} placeholder='Username' name='username' className='mr-sm-2' />
                    <FormControl onChange={event => this.handleChange(event)} type='password' value={this.state.password} placeholder='Password' name='password' className='mr-sm-2' />
                    <Button onClick={this.handleLogin} variant='outline-info'>Log In</Button>
                </Form>
            </div>
        )
    }
}
