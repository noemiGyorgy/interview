import React from "react";

function StyledRow(label, data) {
  return (
    <React.Fragment>
      <tr>
        <th xs lg="3">
          {label}
        </th>
        <td>{data ? data : ""}</td>
      </tr>
    </React.Fragment>
  );
}

export default StyledRow;
