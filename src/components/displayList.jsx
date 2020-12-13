import React, { Component } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';


 class DisplayList extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            show: false,
        };

        // Methods
        this.handleDelete = this.handleDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        // Edit Modal
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleClose(){
        this.setState({show: false});
    }
    handleShow(){
        this.setState({show: true});
    }
    handleEdit(event){
        event.preventDefault();
        this.setState({show: false});
        let data = JSON.parse(localStorage.getItem('data'));

        for (let index = 0; index < data.length; index++) {
          if( this.props.email === data[index].email &&
              this.props.password === data[index].password){
        }
      }
          localStorage.setItem('data', JSON.stringify(data));
          this.props.updateList(data);
    }
    handleDelete(){
        let data = JSON.parse(localStorage.getItem('data'));
        for (let index = 0; index < data.length; index++) {
            if(this.props.email === data[index].email &&
                this.props.password === data[index].password){

                data = [
                  ...data.slice(0, index),
                  ...data.slice(index + 1)
                ];

            }
        }
        localStorage.setItem('data', JSON.stringify(data));
        this.props.updateList(data);
    }


  render() {
    return (
    <div className = "mt-4">
        <li className="list-group-item text-justify">
            Email: {this.props.email} 
            <br /> 
            Password: {this.props.password}
            <br /> 
            <Button onClick = {this.handleShow} variant = "info mr-4 mt-1">Edit</Button>
            <Button onClick = {this.handleDelete} variant = "danger mt-1">Delete</Button>
        </li>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                autoComplete="email" required
                name = "email"
                type="email" 
                placeholder="Enter email"
                value = {this.state.email}
                onChange = {event => this.onChange(event)}
                />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                autoComplete="email" required
                name = "password"
                type="password" 
                placeholder="Password"
                value = {this.state.password}
                onChange = {event => this.onChange(event)}
                />
                </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    )
  }
}

export default DisplayList;