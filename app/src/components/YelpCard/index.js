import React from "react";
import "./style.css";
import {Button, Card} from "react-bootstrap";

function YelpCard(props) {
  return (
      <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="info">Save Food</Button>
          </Card.Body>
      </Card>
  );
}

export default YelpCard;
