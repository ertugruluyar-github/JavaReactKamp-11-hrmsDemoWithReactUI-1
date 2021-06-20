import React, { useState, useEffect } from "react";
import { Header, Icon, Menu, Segment, Table } from "semantic-ui-react";
import EmployerService from "./../../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Segment raised padded>
        <Header
          dividing
          color="blue"
          textAlign="right"
          icon="building"
          content="Employer List"
        />
        <Table verticalAlign="middle" padded celled selectable>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Web Site</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employers.map((employer) => (
              <Table.Row textAlign="center" key={employer.id}>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.email}</Table.Cell>
                <Table.Cell>{employer.webSite}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                <Segment floated="left">
                  <Icon name="info circle" color="grey" size="large" />
                  <span>{employers.length} Employers listed.</span>
                </Segment>
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    </div>
  );
}
