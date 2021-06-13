import React from "react";
import { Table } from "semantic-ui-react";

export default function PersonalInfo() {
  return (
    <div>
      <Table padded definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>First Name</Table.Cell>
            <Table.Cell>Ertuğrul</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>Last Name</Table.Cell>
            <Table.Cell>Uyar</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>Email</Table.Cell>
            <Table.Cell>sample@gmail.com</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>Birth Date</Table.Cell>
            <Table.Cell>23/06/1998</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>Gender</Table.Cell>
            <Table.Cell>Male</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
