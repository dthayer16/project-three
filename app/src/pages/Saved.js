import React, { Component } from "react";
import EventCardSaved from "../components/EventCardSaved";
import YelpCardSaved from "../components/YelpCardSaved";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import API from "../Utils/API";
import FAButton from "../components/FAB";
import UserContext from "./UserContext";
import axios from "axios";


class Saved extends Component {
    static contextType = UserContext;


    state = {
        search: this.context.search,
        eventful: [],
        yelp: [],
    };

    componentDidMount() {
        this.loadEventData();
        this.loadYelpData();
    }

    loadEventData = () => {
        const token = JSON.parse(localStorage.getItem("state")).token;
        axios({
            method: "get",
            url: "v1/saved/event",
            headers: { Authorization: token },
        }).then(res => {
            console.log(res.data);
            this.setState({ eventful: res.data });
            console.log(this.state);
        })
            .catch(err => console.log(err))
    };
    loadYelpData = () => {
        const token = JSON.parse(localStorage.getItem("state")).token;
        axios({
            method: "get",
            url: "v1/saved/yelp",
            headers: { Authorization: token },
        }).then(res => this.setState({ yelp: res.data }))
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        this.context.search = event.target.value;
    };


    handleEventfulDelete = id => {
        const token = JSON.parse(localStorage.getItem("state")).token;
        axios({
            method: "delete",
            url: "v1/saved/yelp/" + id,
            headers: { Authorization: token },
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    };
    handleYelpDelete = id => {
        API.deleteYelp(id)
            .then(res => this.loadYelpData())
            .catch(err => console.log(err))
    };

    render() {
        const { eventful, yelp } = this.state;
        return (
            <div>

                <br />
                <Container>
                    <h3 className="">Saved Results</h3>
                    <Jumbotron>
                        <Row>
                            <Col>
                                <h4 className="text-center"> Cool Events:</h4>

                                {eventful.length > 0 && eventful.map((event) =>
                                    <EventCardSaved
                                        title={event.title}
                                        key={event._id}
                                        id={event._id}
                                        description={event.description}
                                        url={event.url}
                                        date={event.date}
                                        handleEventfulDelete={this.handleEventfulDelete}
                                    />
                                )}
                            </Col>
                            <Col>
                                <h4 className="text-center"> Where to Eat:</h4>

                                {yelp.length > 0 && yelp.map((data) =>
                                    <YelpCardSaved
                                        key={data._id}
                                        name={data.name}
                                        url={data.url}
                                        price={data.price}
                                        image_url={data.image_url}
                                        rating={data.rating}
                                        categories={data.categories}
                                        review_count={data.review_count}
                                        handleYelpDelete={this.handleYelpDelete}
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

export default Saved;
