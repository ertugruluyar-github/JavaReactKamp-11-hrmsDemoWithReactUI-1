import React, { useEffect, useState } from "react";
import { Header, Segment, Table, Icon, Label } from "semantic-ui-react";
import DeleteModal from "./../../../../../utilities/DeleteModal";
import WorkExperienceService from "./../../../../../services/workExperienceService";
import WorkExperienceEditModal from "./../modals/workExperience/WorkExperienceEditModal";
import WorkExperienceAddModal from "./../modals/workExperience/WorkExperienceAddModal";

export default function WorkExperiencesTable({ currentCurriculumVitaeId }) {
  const [currentWorkExperiences, setCurrentWorkExperiences] = useState([]);
  /*
  {
      workPlaceName: "",
      positionName: "",
      startDate: "",
      endDate: "",
      curriculumVitae: { id: "" },
  }
  */
 
  useEffect(() => {
    let workExperienceService = new WorkExperienceService();

    workExperienceService
      .getAll()
      .then((result) =>
        setCurrentWorkExperiences(
          result.data.data.filter(
            (workExperience) =>
              workExperience.curriculumVitae.id === currentCurriculumVitaeId
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
        icon="map marker alternate"
        content="Work Experience List"
      />
      <Table verticalAlign="middle" padded celled selectable>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Work Place Name</Table.HeaderCell>
            <Table.HeaderCell>Position Name</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {currentWorkExperiences.map((workExperience, index) => (
            <Table.Row textAlign="center" key={index}>
              <Table.Cell>
                <WorkExperienceEditModal
                  currentWorkExperience={workExperience}
                />
              </Table.Cell>
              <Table.Cell>{workExperience.workPlaceName}</Table.Cell>
              <Table.Cell>{workExperience.positionName}</Table.Cell>
              <Table.Cell>{workExperience.startDate}</Table.Cell>
              <Table.Cell>{workExperience.endDate}</Table.Cell>
              <Table.Cell>
                <DeleteModal
                  service={new WorkExperienceService()}
                  entityId={workExperience.id}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Segment floated="left">
                <Icon name="info circle" color="blue" size="large" />
                <span>
                  {currentWorkExperiences.length} work experiences listed.
                </span>
              </Segment>
              <Label tag color="olive">
                <WorkExperienceAddModal
                  currentCurriculumVitaeId={currentCurriculumVitaeId}
                />
              </Label>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}
