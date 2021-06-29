import React from "react";
import { Table } from "semantic-ui-react";

export default function PersonalInfo({ currentjobSeeker }) {
  return (
    <Table padded definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>First Name</Table.Cell>
          <Table.Cell>{currentjobSeeker.firstName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>Last Name</Table.Cell>
          <Table.Cell>{currentjobSeeker.lastName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>Email</Table.Cell>
          <Table.Cell>{currentjobSeeker.email}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>Birth Date</Table.Cell>
          <Table.Cell>{currentjobSeeker.dateOfBirth}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>Gender</Table.Cell>
          <Table.Cell>{currentjobSeeker.gender}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
