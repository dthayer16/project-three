import React from "react";
import "./style.css";
import {Card, Button} from "react-bootstrap";

function EventCard(props) {
  return (
      <Card>
          <Card.Header><h3>{props.title}</h3></Card.Header>
          <Card.Body>
              <Card.Title>{props.address}</Card.Title>
              <Card.Text style={{overflow: "hidden"}}>
                  {props.description}
              </Card.Text>
              <Button variant="info">Save Event</Button>
          </Card.Body>
      </Card>
  );
}

export default EventCard;
