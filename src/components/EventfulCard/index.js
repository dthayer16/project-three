import React, {Component} from "react";
import SaveBtn from "../SaveBtn";
import {Card} from "react-bootstrap";


class EventfulCard extends Component {
    state = {

    };



    render(props) {
        return (
            <div>
            <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Link href= {{eventful.url}}> {{eventful.title}} </Card.Link>
                        <Card.Text>
                            {{props.events.event.description}}
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    };

}

export default EventfulCard;