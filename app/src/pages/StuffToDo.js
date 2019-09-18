import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Axios from "axios";

class StuffToDo extends Component {
  state = {
    search: "San Diego",
    eventful: [],
    yelp: [],
    error: ""
  };

  getEvents = () => {
    Axios.get("/v1/events")
      .then(result => {
        this.setState({ eventful: result.data.events.event });
      })
      .catch(err => console.log(err));
  };
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    this.getEvents();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = () => {
    this.getEvents("/v1/events", { location: this.state.search })
      .then(result => {
        this.setState({ eventful: result.data.events.event });
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
