import React, { Component } from "react";
import { Button, Form, Jumbotron, ListGroup } from "react-bootstrap";

class ProductList extends Component {
  render() {
    var styles = {
      textAlign: "right"
    };
    return (
      <div className="container">
        <Jumbotron>
          <h1>Billie Checkout Demo</h1>
          <Form>
            <h3>Company Info</h3>
            <div className="row">
              <div className="col-md-12">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Mustermann GmbH" />
                </Form.Group>
              </div>
            </div>
            <h3>Person</h3>
            <div className="row">
              <div className="col-md-4">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Salutation</Form.Label>
                  <Form.Control as="select">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Max" />
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Mustermann" />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>E-Mail</Form.Label>
                  <Form.Control type="email" placeholder="max@mustermann.de" />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="+49 1745676542" />
                </Form.Group>
              </div>
            </div>

            <h3>Company Address</h3>
            <div className="row">
              <div className="col-md-3">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="email" placeholder="Fith Avenue" />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>House Number</Form.Label>
                  <Form.Control type="email" placeholder="121" />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="email" placeholder="10412" />
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="email" placeholder="Berlin" />
                </Form.Group>
              </div>
            </div>

            <h3>Line Items</h3>
            <div className="row">
              <div className="col-md-12">
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    <span>IPhone 7</span>
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    IPhone 8
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    IPhone XS
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>

            <Button variant="primary" type="submit">
              Pay with Billie
            </Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default ProductList;
