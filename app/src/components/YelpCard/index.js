import React from "react";
import "./style.css";
import { Button, Card } from "react-bootstrap";

function YelpCard(props) {
    let image;
    switch (props.rating) {
        case 1:
            image = <img src="./yelp/yelpStars/regular_1.png" alt="star" id="starRating" />;
            break;
        case 1.5:
            image = <img src="./yelp/yelpStars/regular_1_half.png" alt="star" id="starRating" />;
            break;
        case 2:
            image = <img src="./yelp/yelpStars/regular_2.png" alt="star" id="starRating" />;
            break;
        case 2.5:
            image = <img src="./yelp/yelpStars/regular_2_half.png" alt="star" id="starRating" />;
            break;
        case 3:
            image = <img src="./yelp/yelpStars/regular_3.png" alt="star" id="starRating" />;
            break;
        case 3.5:
            image = <img src="./yelp/yelpStars/regular_3_half.png" alt="star" id="starRating" />;
            break;
        case 4:
            image = <img src="./yelp/yelpStars/regular_4.png" alt="star" id="starRating" />;
            break;
        case 4.5:
            image = <img src="./yelp/yelpStars/regular_4_half.png" alt="star" id="starRating" />;
            break;
        case 5:
            image = <img src="./yelp/yelpStars/regular_5.png" alt="star" id="starRating" />;
            break;
        default:
            image = <img src="./yelp/yelpStars/regular_0.png" alt="star" id="starRating" />;
    }

    let price = props.price;
    if (!props.price) {
        price = "n/a"
    }

  return (
      <Card>
          <Card.Header>
              <Card.Title>
                  <a href={props.url}><img src="./yelp/yelpBurst/Yelp_burst_positive_RGB.png" alt="Yelp Burst Photo" id="yelpBurst"/></a>{props.name}
              </Card.Title>
          </Card.Header>
          <Card.Body>
              <div>
                  {image}    {props.review_count}  reviews
              </div>
              <br/>
                  Price: {price}
                  <hr/>
              <Card.Text>
                  <img src={props.image_url} alt="Store Image" style={{maxWidth: "340px", maxHeight: "123px"}}/>
              </Card.Text>
              <Button variant="info">Save Food</Button>
          </Card.Body>
      </Card>
    );
}

export default YelpCard;
