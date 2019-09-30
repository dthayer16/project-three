import React from "react";
import { Container, Row } from "reactstrap";
import Userform from "../components/Userform";

function Signup(props) {
  return (
    <div
      className="text-center"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "16.7rem"
      }}
    >
      <Container
        className="border rounded"
        style={{
          backgroundColor: "white",
          padding: "40px",
          width: "675px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
        }}
      >
        <Row className="justify-content-center">
          <h1
            style={{
              marginBottom: "30px"
            }}
          >
            Sign up
          </h1>
        </Row>
        <Row className="justify-content-center">
          <Userform updateUser={props.updateUser} />
          <p style={{ marginTop: "20px" }}>Already a User? <a href="/login">Login!</a></p>
        </Row>
      </Container>
    </div>
  );
}
export default Signup;
