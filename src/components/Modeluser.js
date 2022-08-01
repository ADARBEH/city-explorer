import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class Modeluser extends React.Component {
render(){
    return(
        <Modal show={this.props.error_info} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Erorr 404 </Modal.Title>
        </Modal.Header>
        <Modal.Body>The city you are looking for does not exist !! </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    )
}
}

export default Modeluser;
