import React, { useState } from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

function RegistrationForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center">
          <Col md="auto" className="pt-3 pb-3">
            <Card
              className="justify-content-center p-3"
              md="auto"
              style={{ width: "100%" }}
            >
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group controlId="validationFirstName">
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your first name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="validationLastName">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your last name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group controlId="formEmail">
                    <Form.Control required type="email" placeholder="E-mail" />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid e-mail.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group required controlId="formPhoneNumber">
                    <Form.Control
                      type="tel"
                      placeholder="Phone number (optional)"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group controlId="formTaxNumber">
                    <Form.Control
                      type="text"
                      maxLength="10"
                      placeholder="Tax identification number (optional)"
                    />
                    <Form.Control.Feedback type="invalid">
                      Tax identification number is a 10-digit number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Row className="justify-content-center">
                  <Button type="submit" variant="success" className="m-2">
                    Submit
                  </Button>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default RegistrationForm;
