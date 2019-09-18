import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import {Carousel} from "react-bootstrap";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>

      <Hero backgroundImage="placehold.it/800x300">
        <h1></h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default About;
