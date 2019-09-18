import React from "react";
import SaveBtn from "../SaveBtn";
import {Card} from "react-bootstrap";

function YelpCard(props) {

    return (
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Img variant="left" src={{props.image_url}} alt='Image'/>
                    <Card.Title href={{props.url}}>{{props.name}}</Card.Title>
                    <Card.Text>
                        {{props.description}}
                    </Card.Text>
                    <Card.text>
                        {{props.rating}}
                    </Card.text>
                </Card.Body>
            </Card>
        </div>
    )
}


export default YelpCard;