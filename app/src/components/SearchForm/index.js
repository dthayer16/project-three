import React from "react";
import "./style.css";
import {InputGroup, FormControl} from "react-bootstrap";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <InputGroup size="md">
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                 value={props.search}
                                 onChange={props.handleInputChange}
                                 name="breed"
                                 list="breeds"
                                 type="text"
                                 className="form-control"
                                 placeholder="Where would you like to go?"
                                 id="breed"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text type="submit" className="btn btn-info" onClick={props.handleFormSubmit}
                                         id="inputGroup-sizing-md">Search</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

            </div>
        </form>
    );
}

export default SearchForm;
