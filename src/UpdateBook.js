import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'




class UpdateBook extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header>
                        <Modal.Title>Update Information </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook} >
                            <Form.Group className="mb-5" >
                                <Form.Label>The title of the book</Form.Label>
                                <Form.Control type="text" name="title" defaultValue={this.props.title} />

                            </Form.Group>

                            <Form.Group className="mb-5" >
                                <Form.Label>Description of the book</Form.Label>
                                <Form.Control type="text" name="description" defaultValue={this.props.description} />
                            </Form.Group>
                            <Form.Group className="mb-5" >

                                <Form.Label>status</Form.Label>
                                <Form.Control type="text" name="status" defaultValue={this.props.status} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update book information
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

export default UpdateBook;