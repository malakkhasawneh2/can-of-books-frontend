import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

class Modelbook extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.handelShowModel}>
                    <Modal.Header>
                        <Modal.Title>Add your favorite Book</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>


                        <Form onSubmit={this.props.addBook} >
                            <Form.Group className="mb-3" >
                                <Form.Label>The title of the book</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter the title" />

                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Description of the book</Form.Label>
                                <Form.Control type="text" name="description" placeholder="Enter the description" />
                            </Form.Group>

                            <Form.Group className="mb-3" >

                                <Form.Label>status</Form.Label>
                                <Form.Control type="text" name="status" placeholder="Enter the status" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add the book
                            </Button>
                        </Form>




                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
                {/* <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select> */}






            </div>
        );
    }
}

export default Modelbook;