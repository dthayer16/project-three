import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Axios from "axios";
import API from "../Utils/API"

class StuffToDo extends Component {
  state = {
    search: "San Diego",
    eventful: [],
    yelp: [],
    error: ""
  };

  getEvents = () => {
    Axios.get("/v1/events/San+Diego")
      .then(result => {
        this.setState({ eventful: result.data.events.event });
      })
      .catch(err => console.log(err));
  };

  // getYelp = () => {
  //   Axios.get("/v1/yelp")
  //     .then(result => {
  //       this.setState({ yelp: result.data.businesses });
  //     })
  //     .catch(err => console.log(err));
  // };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEvents();
    // this.getYelp();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = () => {
    this.getEvents("/v1/events")
      .then(result => {
        this.setState({ eventful: result.data.events.event, yelp: result.data.businesses });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Location!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default StuffToDo;
