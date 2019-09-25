import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {

    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirectTo: null

        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)

    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('handleSubmit')

        axios
            .post('v1/user/signin', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    // update App.js state
                    // console.log(props)
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email
                    })
                    // update the state to redirect to home
                    this.setState({
                        email: '',
                        password: '',
                        redirectTo: '/'
                    })
                    this.props.history.push("/home");
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }


    render() {
        console.log("TUCKER", this.props);
        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="examplePassword" placeholder="Password" />
                </FormGroup>
                <Button
                    //  className="btn btn-primary col-1 col-mr-auto"

                    onClick={this.handleSubmit}

                    type="submit">Submit</Button>

                <p style={{ marginTop: "20px" }}>Not a User? <a href="/signup">Sign Up!</a></p>
            </Form>
        );
    }
}

export default withRouter(LoginForm);
