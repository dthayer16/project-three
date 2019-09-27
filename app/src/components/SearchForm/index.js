import React from "react";
import "./style.css";
import {InputGroup, FormControl, Button} from "react-bootstrap";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <InputGroup size="lg">
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg"
                                 onChange={props.handleInputChange}
                                 name="search"
                                 type="text"
                                 className="form-control"
                                 placeholder="San Diego, CA"
                    />
                        <Button type="submit" variant="outline-info" onClick={props.handleFormSubmit} style={{display: "inline"}}><i className="fas fa-search"> </i></Button>
                </InputGroup>

            </div>
        </form>
    );
}

export default SearchForm;
