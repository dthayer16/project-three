import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";
import moment from "moment";

function EventCard(props) {
    //limits description to desired length
    let text_truncate = function (str, length, ending) {
        if (length == null) {
            length = 140;
        }
        if (ending == null) {
            ending = ' ...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };

    let date = moment(props.date).format('MMMM Do YYYY');
    let description;
    if (!props.description) {
        description = `No Summary Available`;
    } else {
        description = text_truncate(props.description)
    }
    return (
        <Card>
            <Card.Header>
                <Card.Title><a href={props.url} target="blank" style={{ color: "black" }}>{props.title}</a></Card.Title>
            </Card.Header>
            <Card.Body>

                When it's happening: {date}
                <hr />
                <strong>Eventful Summary:</strong>
                <Card.Text style={{ maxLength: "150" }}>
                    <br />
                    {description}
                </Card.Text>
                <Button variant="info">Save Event</Button>
            </Card.Body>
        </Card>
    );
}

export default EventCard;
