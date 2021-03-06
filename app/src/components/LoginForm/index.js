import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import axios from 'axios'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }
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
                console.log('login response: ');
                console.log(response)
                if (response.status === 200) {

                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email,
                        token: response.data.token
                    })
                    // update the state to redirect to home
                    this.setState({
                        email: '',
                        password: '',
                        redirectTo: '/'
                    })
                    this.props.history.push("/");
                }
            }).catch(error => {
                console.log('login error: ');
                console.log(error);

            })
    }


    render() {

        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="exampleEmail" placeholder="youremail@here.com" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="examplePassword" placeholder="Password" />
                </FormGroup>
                <br />
                <Button
                    //  className="btn btn-primary col-1 col-mr-auto"
                    className="mt-2 mb-2 mr-sm-2 mb-sm-0 btn btn-info"

                    onClick={this.handleSubmit}

                    type="submit">Submit</Button>
            </Form>
        );
    }
}

export default withRouter(LoginForm);
