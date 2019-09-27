import React, { Component } from "react";
import YelpCard from "../components/YelpCard";
import EventCard from "../components/EventCard";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import API from "../Utils/API";
import UserContext from "./UserContext";
import FAButton from "../components/FAB"


class Discover extends Component {
    static contextType = UserContext;


    state = {
        search: this.context.search,
        eventful: [],
        yelp: [],
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        // var city = this.state.search;
        const context = this.context;

        API.getEvents(context.search)
            .then(res => {
                // console.log(res.data.event);
                this.setState({eventful: res.data.event})

            })
            .catch(err => console.log(err));

        API.getYelp(context.search)
            .then(res => {
                // console.log(res.data.businesses);
                this.setState({yelp: res.data.businesses})

            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.context.search = event.target.value;
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.history.push('/discover');
        this.setState({ search: this.context.search });
        console.log("form submitted")
    };

    //Save methods
    handleEventfulSave = event => {

    };

    handleYelpSave = _id => {
        console.log("Event Submitted");

        API.saveYelp({
            _id: this.key,
            name: this.name,
            url: this.url,
            price: this.price,
            rating: this.rating,
            review_count: this.review_count
        })
            .catch(err=>console.log(err))
    };

    render() {
        const { eventful, yelp } = this.state;
        return (
            <div>
                <Container>
                    <h3 className="">Results for {this.context.search}</h3>
                    <Jumbotron>
                        <Row>
                            <Col>
                                <h4 className="text-center"> Cool Events:</h4>

                                {eventful ? eventful.map((event) =>
                                    <EventCard
                                        key={event.id}
                                        title={event.title}
                                        description={event.description}
                                        url={event.url}
                                        date={event.start_time}
                                        handleEventfulSave={ this.handleEventfulSave }
                                    />
                                ) : <h1> No Events </h1>}
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
                                        review_count={data.review_count}
                                        handleYelpSave={ this.handleYelpSave({_id: data.id}) }
                                    />
                                )}
                            </Col>
                        </Row>
                    </Jumbotron>
                    <FAButton />
                </Container>
            </div>
        );
    }
}

export default Discover;
