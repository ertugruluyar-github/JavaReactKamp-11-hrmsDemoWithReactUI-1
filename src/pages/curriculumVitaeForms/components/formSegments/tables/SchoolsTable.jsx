import React, { useEffect, useState } from "react";
import { Header, Segment, Table, Icon, Label } from "semantic-ui-react";
import SchoolEditModal from "./../modals/SchoolEditModal";
import SchoolService from "./../../../../../services/schoolService";
import SchoolAddModal from "./../modals/SchoolAddModal";
import DeleteModal from '../modals/DeleteModal';

export default function SchoolsTable({ currentCurriculumVitaeId }) {
  const [currentSchools, setCurrentSchools] = useState([
    {
      name: "",
      department: "",
      startDate: "",
      endDate: "",
      curriculumVitae: { id: "" },
    },
  ]);

  useEffect(() => {
    let schoolService = new SchoolService();

    schoolService
      .getAll()
      .then((result) =>
        setCurrentSchools(
          result.data.data.filter(
            (school) => school.curriculumVitae.id === currentCurriculumVitaeId
          )
        )
      );
  }, [currentCurriculumVitaeId]);
  return (
    <Segment raised padded>
      <Header
        dividing
        color="blue"
        textAlign="right"
        icon="graduation"
        content="School List"
      />
      <Table verticalAlign="middle" padded celled selectable>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {currentSchools.map((school, index) => (
            <Table.Row textAlign="center" key={index}>
              <Table.Cell>
                <SchoolEditModal currentSchool={school} />
              </Table.Cell>
              <Table.Cell>{school.name}</Table.Cell>
              <Table.Cell>{school.department}</Table.Cell>
              <Table.Cell>{school.startDate}</Table.Cell>
              <Table.Cell>{school.endDate}</Table.Cell>
              <Table.Cell><DeleteModal /></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Segment floated="left">
                <Icon name="info circle" color="blue" size="large" />
                <span>{currentSchools.length} schools listed.</span>
              </Segment>
              <Label tag color="olive">
                <SchoolAddModal />
              </Label>
                
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}
