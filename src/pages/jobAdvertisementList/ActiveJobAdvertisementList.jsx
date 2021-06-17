import React, { useState, useEffect } from "react";
import { Header, Icon, Menu, Segment, Table } from "semantic-ui-react";
import JobAdvertisementService from "./../../services/jobAdvertisementService";

export default function ActiveJobAdvertisementList() {
  const [activeJobAdvertisements, setActiveJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getActivatedJobAdvertisements()
      .then((result) => setActiveJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Segment raised padded>
        <Header
          dividing
          color="blue"
          textAlign="right"
          icon="bullhorn"
          content="Job Advertisement List"
        />
        <Table verticalAlign="middle" padded celled>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Employee Position</Table.HeaderCell>
              <Table.HeaderCell>Number Of Position</Table.HeaderCell>
              <Table.HeaderCell>Release Date</Table.HeaderCell>
              <Table.HeaderCell>Application Deadline</Table.HeaderCell>
              <Table.HeaderCell>Working Place Type</Table.HeaderCell>
              <Table.HeaderCell>Working Time Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {activeJobAdvertisements.map((activeJobAdvertisement) => (
              <Table.Row textAlign="center" key={activeJobAdvertisement.id}>
                <Table.Cell>
                  {activeJobAdvertisement.employer.companyName}
                </Table.Cell>
                <Table.Cell>
                  {activeJobAdvertisement.employeePosition.positionName}
                </Table.Cell>
                <Table.Cell>
                  {activeJobAdvertisement.numberOfPosition}
                </Table.Cell>
                <Table.Cell>{activeJobAdvertisement.releaseDate}</Table.Cell>
                <Table.Cell>
                  {activeJobAdvertisement.applicationDeadline}
                </Table.Cell>
                <Table.Cell>
                  {activeJobAdvertisement.workingPlaceType.type}
                </Table.Cell>
                <Table.Cell>
                  {activeJobAdvertisement.workingTimeType.type}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="8">
                <Segment floated="left">
                  <Icon name="info circle" color="grey" size="large" />
                  <span>
                    {activeJobAdvertisements.length} Job advertisements listed.
                  </span>
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
