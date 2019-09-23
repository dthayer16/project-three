import React from "react";
import "./style.css";
import {Card, Button} from "react-bootstrap";

function EventCard(props) {
  return (
      <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="info">Save Event</Button>
          </Card.Body>
      </Card>
  );
}

export default EventCard;
