import React, { useState } from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from "../common/ImageUploader";

function RegistrationForm() {
  const [validated, setValidated] = useState(false);
  const [birthDate, setBirthDate] = useState(null);
  const [registrationDate, setRegistrationDate] = useState(null);

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
          <Col md="auto" lg={6} className="pt-3 pb-3">
            <Card className="p-3" style={{ width: "100%" }}>
              <h3 className="text-center m-3 mb-4">Registration</h3>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label className="m-0">Name*</Form.Label>
                <Form.Row>
                  <Form.Group as={Col} controlId="validationFirstName">
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your first name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationLastName">
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
                  <Form.Group controlId="formBirthDate">
                    <Form.Label>Birth Date *</Form.Label>
                    <DatePicker
                      required
                      placeholderText="Click to select a date"
                      selected={birthDate}
                      onChange={(date) => setBirthDate(date)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your birth date.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group controlId="formEmail">
                    <Form.Label>E-mail *</Form.Label>
                    <Form.Control required type="email" />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid e-mail.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group required controlId="formPhoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group controlId="formTaxNumber">
                    <Form.Label>Tax identification number</Form.Label>
                    <Form.Control type="text" maxLength="10" />
                    <Form.Control.Feedback type="invalid">
                      Tax identification number is a 10-digit number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group controlId="formRegistrationDate">
                    <Form.Label>
                      Select a date for confirmation of registration:
                    </Form.Label>
                    <DatePicker
                      placeholderText="Click to select a date and time"
                      selected={registrationDate}
                      onChange={(date) => setRegistrationDate(date)}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group controlId="formRegistrationDay">
                    <Form.Label>Attachments</Form.Label>
                    <Form.Text>
                      You can upload 2 images (max. 1MB/file)
                    </Form.Text>
                    <ImageUploader />
                  </Form.Group>
                </Form.Row>

                <Row className="justify-content-center">
                  <Button
                    type="submit"
                    className="mt-4 mb-4 pt-3 pb-3 pr-5 pl-5 primary-button"
                  >
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
