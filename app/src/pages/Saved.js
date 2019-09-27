import React, {Component} from "react";
import EventCardSaved from "../components/EventCardSaved";
import YelpCardSaved from "../components/YelpCardSaved";
import {Jumbotron, Container, Col, Row} from "react-bootstrap";
import API from "../Utils/API";
import FAButton from "../components/FAB";
import UserContext from "./UserContext";


class Saved extends Component {
    static contextType = UserContext;


    state = {
        search: this.context.search,
        eventful: [],
        yelp: []
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.loadEventData();
        this.loadYelpData();
    }

    loadEventData = () => {
        API.getSavedEvent()
            .then(res =>
            this.setState({eventful: res.data})
            )
            .catch(err => console.log(err));
    };
    loadYelpData = () => {
        API.getSavedYelp()
            .then(res =>
            this.setState({yelp: res.data})
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.context.search = event.target.value;
    };


    handleEventfulDelete = id => {
        API.deleteEvent(id)
            .then(res => this.loadEventData())
            .catch(err => console.log(err))
    };

    handleYelpDelete = id => {
        API.deleteYelp(id)
            .then(res => this.loadYelpData())
            .catch(err => console.log(err))
    };

    render() {
        const {eventful, yelp} = this.state;
        return (
            <div>

                <br/>
                <Container>
                    <h3 className="">Saved Results</h3>
                    <Jumbotron>
                        <Row>
                            <Col>
                                <h4 className="text-center"> Cool Events:</h4>

                                {eventful ? eventful.map((event) =>
                                    <EventCardSaved
                                        key={event._id}
                                        title={event.title}
                                        description={event.description}
                                        url={event.url}
                                        date={event.start_time}
                                        handleEventfulDelete={ this.handleEventfulDelete(event._id) }
                                    />
                                ) : <h1> No Events </h1>}
                            </Col>
                            <Col>
                                <h4 className="text-center"> Where to Eat:</h4>

                                {yelp ? yelp.map((data) =>
                                    <YelpCardSaved
                                        key={data._id}
                                        name={data.name}
                                        url={data.url}
                                        price={data.price}
                                        image_url={data.image_url}
                                        rating={data.rating}
                                        categories={data.categories}
                                        review_count={data.review_count}
                                        handleYelpDelete = { this.handleYelpDelete(data._id) }
                                    />
                                ): <h1>No Eats</h1>}
                            </Col>
                        </Row>
                    </Jumbotron>
                    <FAButton/>
                </Container>
            </div>
        );
    }
}

export default Saved;
