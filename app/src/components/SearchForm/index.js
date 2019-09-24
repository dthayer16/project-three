import React from "react";
import "./style.css";
import {InputGroup, FormControl, Button} from "react-bootstrap";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <InputGroup size="md">
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                 value={props.search}
                                 onChange={props.handleInputChange}
                                 name="search"
                                 type="text"
                                 className="form-control"
                                 placeholder="San Diego, CA"
                                 id="breed"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-info" onClick={props.handleFormSubmit}><i className="fas fa-search"> </i></Button>
                    </InputGroup.Append>
                </InputGroup>

            </div>
        </form>
    );
}

export default SearchForm;
