import React, { Component } from "react";
// import API from "../Utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import NavFrontPage from "../components/NavBarFrontPage";
// import Axios from "axios";
import UserContext from "./UserContext";

class Search extends Component {
  static contextType = UserContext;

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
  // const context = this.context;
  }

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
        <NavFrontPage/>
        <Container style={{ minHeight: "80%", marginTop: "12rem" }}>
          <h1 className="text-center">Where To?</h1>
          <br/><br/>
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
