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
            <div className="div-form">
            <Form onSubmit={this.onSubmit} >
                <Form.Group className="mb-3" controlId="cityName">
                    <Form.Control type="text" placeholder="Enter city name" className="input" />
                </Form.Group>
                <Button variant="primary" type="submit" className="input-btm" >
                    Exlpore!
                </Button>
            </Form>
            </div>
        );
    }
}

export default SearchForm;