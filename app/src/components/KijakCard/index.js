import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import moment from "moment";

function KijakCard(props) {

    let departTime = moment(props.departTime).format('MMMM Do YYYY, h:mm a');

    let arrivalTime = moment(props.arrivalTime).format('MMMM Do YYYY, h:mm a');


    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    <img alt="" src={`kayak.com${props.airlineLogo}`} />{props.airlines}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <p>Flight Number:</p><h2>{props.flightNumber}</h2>
                <br />
                <p>Departure Date/Time: <br /> {departTime}</p>
                <br />
                <p>Arrival Date/Time: <br /> {arrivalTime}</p>
                <br />
                <p> Flight Info From: <a href={props.baseUrl} target="blank">{props.baseUrl}</a></p>
            </Card.Body>
        </Card>
    );
}

export default KijakCard;
