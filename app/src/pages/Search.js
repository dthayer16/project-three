import React, { Component } from "react";
import API from "../Utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Alert from "../components/Alert";
import NavFrontPage from "../components/NavBarFrontPage";

class Search extends Component {
  state = {
    search: "",

    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEvents()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getEvents(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <NavFrontPage/>
        <Container style={{ minHeight: "80%", marginTop: "12rem" }}>
          <h1 className="text-center">Where would you like to go?</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
