import React, { Component } from "react";

import { Jumbotron, Container, Row, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import KijakCard from "../components/KijakCard"
import API from "../Utils/API";
import UserContext from "./UserContext";
import DatePicker from 'react-date-picker'
import airports from "airport-codes"
class About extends Component {
  static contextType = UserContext;
  state = {
    kijak: {},
    startDate: new Date(),
    endDate: new Date(),
    origin1: null,
    origin2: null,
    destination: null,
    adults: 1,
    bags: 1
  };
  // This is where the actual api call is made, this will eventually go into submitOn once we get the translation to work.
  componentDidMount() {
    // var city = this.state.search;
    const context = this.context;
    console.log(airports.findWhere({ city: 'Los Angeles' }).get('iata'))
    API.getFlight(this.state)

      .then(res => {
        // console.log(res.data.event);
        this.setState({ kijak: JSON.parse(res.data) })
      })
      .catch(err => console.log(err));
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
    console.log(this.state.startDate)
  };
  handleEndDate = date => {
    this.setState({
      endDate: date
    });
    console.log(this.state.endDate)
  };

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

  }
  //Attempted to build out a translator function and call it from within submitOn. No success yet
  translateCity = (val) => {
    // airports.findWhere({ city: val.toString() }).get('iata')
  }
// Setting the state on any change to the inputs. 
  handleContentChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    this.setState({
        [name]: value
    });
    console.log(this.state)

}
// Submit should translate the City name to the airport code and then any redirects you may need
  submitOn = () => {
console.log(this.state.origin)
    console.log("function working")
    let newOrigin = this.state.origin1
    console.log(this.state.origin)
    let newNew = airports.findWhere({ city: newOrigin }).get('iata')
    this.setState({
      origin2: newNew
    })
    // console.log(airports.findWhere({ city: newOrigin }).get('iata'))
  }
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
            <Form>
          <Form.Group style={{ width: "18rem" }} controlId="exampleForm.ControlInput1">
            <Form.Label>Depart:</Form.Label>
            <Form.Control type="text" placeholder="Enter Departing Airport" name="origin" onChange={this.handleContentChange} />
          </Form.Group>
          <Form.Group style={{ width: "18rem" }} controlId="exampleForm.ControlInput2">
            <Form.Label>Arrive:</Form.Label>
            <Form.Control type="text" placeholder="Enter Arriving Airport" />
          </Form.Group>
          <Form.Group style={{ width: "3rem" }} controlId="exampleForm.ControlSelect1">
            <Form.Label>Adults</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              </Form.Control>
          </Form.Group>
              <Form.Group style={{ width: "3rem" }} controlId="exampleForm.ControlSelect2">
            <Form.Label>Bags</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>
          <DatePicker
            name="startDate"
            value={this.state.startDate}
            selected={this.state.startDate}
            onChange={this.handleChange} />
          <DatePicker
            name="endDate"
            value={this.state.endDate}
            selected={this.state.endDate}
            onChange={this.handleEndDate} />
          <Form.Check
            type="radio"
            label="One Way"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            type="radio"
            label="Round Trip"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
              <Button color="primary" size="lg" variant="outline-info" ><i className="fas fa-search" onClick={this.submitOn}> </i></Button>
        </Form>
              {/* {this.renderFlightInfo()} */}
            </Row>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}
export default About;