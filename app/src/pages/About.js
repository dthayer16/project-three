import React, { Component } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import KijakCard from "../components/KijakCard"
import API from "../Utils/API";
import UserContext from "./UserContext";

class About extends Component {

  static contextType = UserContext;


  state = {
    kijak: {}
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    // var city = this.state.search;
    const context = this.context;

    API.getFlight(context.search)
      .then(res => {
        // console.log(res.data.event);
        this.setState({ kijak: JSON.parse(res.data) })
      })
      .catch(err => console.log(err));
  }

  renderFlightInfo = () => {
    const { kijak } = this.state;
    const flights = [];
    for (let flight in kijak.segset) {
      flights.push(<KijakCard
        key={flight}
        airlineLogo={kijak.airlineLogos[kijak.segset[flight].airlineCode]}
        airlines={kijak.airlines[kijak.segset[flight].airlineCode]}
        flightNumber={kijak.segset[flight].flightNumber}
        departTime={kijak.segset[flight].leaveTimeUTC}
        arrivalTime={kijak.segset[flight].arriveTimeUTC}
        baseUrl={kijak.baseUrl}
      />)
    }
    return flights;
  };
  // handleInputChange = event => {
  //   this.context.search = event.target.value;
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.props.history.push('/discover');
  //   this.setState({ search: this.context.search });
  //   console.log("form submitted")
  // };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <Row>
              {this.renderFlightInfo()}
            </Row>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}

export default About;
