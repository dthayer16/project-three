import React, {Component} from "react";
import YelpCard from "../components/YelpCard";
import EventCard from "../components/EventCard";
import {Jumbotron, Container, Col, Row, Button} from "react-bootstrap";
import Navvy from "../components/Navbar";
import API from "../Utils/API";


class Discover extends Component {
    state = {
        search: "",
        eventful: [],
        yelp: []
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        API.getEvents()
            .then(res => {
                console.log(res.data);
                this.setState({eventful: res.data.event})
            })
            .catch(err => console.log(err));
        API.getYelp()
            .then(res => {
                console.log(res.data.businesses);
                this.setState({yelp: res.data.businesses})
            })
            .catch(err => console.log(err));
    }

    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        // Clone this.state to the newState object
        // We'll modify this object and use it to set our component's state
        const newState = {...this.state};

        if (btnType === "pick") {
            // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
            newState.match = 1 === Math.floor(Math.random() * 5) + 1;

            // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
            newState.matchCount = newState.match
                ? newState.matchCount + 1
                : newState.matchCount;
        } else {
            // If we thumbs down'ed the dog, we haven't matched with it
            newState.match = false;
        }
        // Replace our component's state with newState, load the next dog image
        this.setState(newState);
        this.loadNextDog();
    };

    loadNextDog = () => {
        API.getRandomDog()
            .then(res =>
                this.setState({
                    image: res.data.message
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        const {eventful, yelp} = this.state;
        return (
            <div>
                <Navvy/>
                <br/>
                <Container>
                    <h3 className="">Results for {this.state.search}</h3>
                    <Jumbotron>
                        <Row>
                            <Col>
                                <h4 className="text-center"> Events Happening:</h4>

                                {eventful.length > 0 && eventful.map((event) =>
                                    <EventCard
                                        key={event.id}
                                        title={event.title}
                                        description={event.description}
                                        url={event.url}
                                        date={event.start_time}
                                    />
                                )}
                            </Col>
                            <Col>
                                <h4 className="text-center"> Where to Eat:</h4>

                                {yelp.length > 0 && yelp.map((data) =>
                                    <YelpCard
                                        key={data.id}
                                        name={data.name}
                                        url={data.url}
                                        price={data.price}
                                        image_url={data.image_url}
                                        rating={data.rating}
                                        categories={data.categories}
                                        review_count={data.review_count}
                                    />
                                )}
                            </Col>
                        </Row>
                    </Jumbotron>
                    <Button variant="info" size="lg">
                        Let's Go!
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Discover;
