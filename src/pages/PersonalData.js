import React, { useContext } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { DataContext } from "../context/DataContext";
import lorem1 from "../lorem_ipsum1.jpg";
import lorem2 from "../lorem_ipsum2.gif";

function PersonalData() {
  const dataContext = useContext(DataContext);
  let data = dataContext.userData;
  console.log("innen:");

  let content = (
    <Card className="p-3" style={{ width: "100%" }}>
      <h3 className="text-center mt-3 mb-4">There is no user to show</h3>
    </Card>
  );

  if (data !== undefined && data !== null) {
    //let { firstName, lastName, birthDate } = data;
    content = (
      <React.Fragment>
        <div class="alert alert-info" role="alert">
          Confirmation of registration:
          <strong> 08/10/2020</strong>
        </div>
        <Card className="p-3 mb-3" style={{ width: "100%" }}>
          <h3 className="mt-3 mb-4">Profile</h3>
          <table className="table">
            <tr>
              <td className="label">Name</td>
              <td>First Last</td>
            </tr>
            <tr>
              <td className="label">Birth Date</td>
              <td>02/04/1988</td>
            </tr>
            <tr>
              <td className="label">Tax identification number</td>
              <td>8101010010</td>
            </tr>
          </table>
        </Card>
        <Card className="p-3 mb-3" style={{ width: "100%" }}>
          <h3 className="mt-3 mb-4">Contact Information</h3>
          <table className="table">
            <tr>
              <td className="label">E-mail</td>
              <td>xxxxx@xxxxx.com</td>
            </tr>
            <tr>
              <td className="label">Phone number</td>
              <td>06 90 999 9999</td>
            </tr>
          </table>
        </Card>
        <Card className="p-3 mb-3" style={{ width: "100%" }}>
          <h3 className="mt-3 mb-4">Documents</h3>
          <Row className="text-center">
            <Col>
              <img className="img-thumbnail" src={lorem1} alt=""></img>
            </Col>
            <Col>
              <img className="img-thumbnail" src={lorem2} alt=""></img>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center">
          <Col md="auto" lg={8} className="pt-3 pb-3">
            {content}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default PersonalData;
