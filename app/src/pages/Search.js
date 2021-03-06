import React, { Component } from "react";
// import API from "../Utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import UserContext from "./UserContext";

class Search extends Component {
  static contextType = UserContext;

  handleInputChange = event => {
    this.context.search = event.target.value;
    console.log(this.context)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.history.push('/discover');
    this.setState({ search: this.context.search });
    console.log("form submitted")
  };
  
  render() {
    return (
      <div>

        <Container style={{ minHeight: "80%", marginTop: "12rem" }}>
          <h1 className="text-center">Where To?</h1>
          <br /><br />

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            search={this.context.search}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
