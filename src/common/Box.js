import React from "react";
import { Card, Table } from "react-bootstrap";

function Box(props) {
  return (
    <React.Fragment>
      <Card className="p-3" style={{ width: "100%" }}>
        <h3 className="mt-3 mb-4">{props.title}</h3>
        <Table responsive>{props.rows}</Table>
      </Card>
    </React.Fragment>
  );
}

export default Box;
