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
                                <option>Select status:</option>
                                <option value="all">All</option>
                                <option value="1">Free</option>
                                <option value="2">5 stars</option>
                                <option value="3">recommanded</option>
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






            </div>
        );
    }
}

export default Modelbook;