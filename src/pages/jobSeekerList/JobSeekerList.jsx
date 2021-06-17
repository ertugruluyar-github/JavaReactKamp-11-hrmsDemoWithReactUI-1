import React, { useState, useEffect } from "react";
import { Header, Icon, Menu, Segment, Table } from "semantic-ui-react";
import JobSeekerService from "./../../services/jobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setjobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekers()
      .then((result) => setjobSeekers(result.data.data));
  }, []);

  return (
    <div>
      <Segment raised padded>
        <Header
          dividing
          color="blue"
          textAlign="right"
          icon="handshake"
          content="Job Seeker List"
        />
        <Table verticalAlign="middle" padded celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Nationality Id</Table.HeaderCell>
              <Table.HeaderCell>Date of Birth</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobSeekers.map((jobSeeker) => (
              <Table.Row key={jobSeeker.id}>
                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                <Table.Cell>{jobSeeker.email}</Table.Cell>
                <Table.Cell>{jobSeeker.nationalityId}</Table.Cell>
                <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
                <Table.Cell>{jobSeeker.gender}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                <Segment floated="left">
                  <Icon name="info circle" color="grey" size="large" />
                  <span>{jobSeekers.length} Jobseekers listed.</span>
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
