import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class SearchForm extends React.Component {

   

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onsearch(event.target.cityName.value);
        
    }

 


    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="cityName">
                    <Form.Label>Search City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Exlpore!
                </Button>
            </Form>
        );
    }
}

export default SearchForm;