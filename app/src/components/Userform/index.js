import React from 'react';
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import axios from 'axios';

class userform extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectTo: null
    };

    console.log(props)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('handleSubmit');

    axios
      .post('v1/user/signup', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log('login response: ');
        console.log("test");
        if (!response.data.errmsg) {
          console.log("successful signup");
          // update App.js state
          console.log(this.props);

          this.props.updateUser({
            loggedIn: true,
            email: response.data.email,
            token: response.data.token
          })
          // update the state to redirect to home
          this.props.history.push("/");
        }
      }).catch(error => {
        console.log('sign up error: ');
        console.log(error);

      })
  }


  render() {

    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label
            for="exampleEmail"
            className="mr-sm-2">Email</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="exampleEmail" placeholder="youremail@here.com" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label
            for="examplePassword" className="mr-sm-2">Password</Label>
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange} id="examplePassword"
            placeholder="Password" />
        </FormGroup>
        <Button className="mt-2 mb-2 mr-sm-2 mb-sm-0 btn btn-info" onClick={this.handleSubmit} type="submit" >Submit</Button>
      </Form>
    );
  }
}

export default withRouter(userform);
