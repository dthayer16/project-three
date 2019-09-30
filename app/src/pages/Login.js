import React from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import LoginForm from "../components/LoginForm"


function Login(props) {
    return (
        <div className="text-center"
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                padding: '16.7rem'
            }}>
            <Container fluid className="block-example border border-dark rounded mb-0"
                style={{
                    backgroundColor: "white",
                    padding: "40px",
                    width: "675px",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
                }}>
                <Row className="justify-content-center">
                    <h1 style={{
                        marginBottom: "30px"
                    }}>Log In</h1>
                </Row>
                <Row className="justify-content-center">
                    <LoginForm updateUser={props.updateUser} />
                    <p style={{ marginTop: "20px" }}>Not a User? <a href="/signup">Sign Up!</a></p>
                </Row>
            </Container>
        </div>
    );
}

export default Login;