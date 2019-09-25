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
                backgroundImage: `url(https://images.wallpaperscraft.com/image/cube_dark_texture_shape_119956_300x168.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                padding: '16.7rem'
            }}>
            <Container fluid className="block-example border border-dark rounded mb-0"
                style={{
                    backgroundColor: "white",
                    padding: "40px",
                    width: "675px"
                }}>
                <Row>
                    <h1 style={{
                        marginBottom: "30px"
                    }}>Log In</h1>
                </Row>
                <Row>
                    <LoginForm updateUser={props.updateUser}/>
                </Row>
            </Container>
        </div>
    );
}

export default Login;