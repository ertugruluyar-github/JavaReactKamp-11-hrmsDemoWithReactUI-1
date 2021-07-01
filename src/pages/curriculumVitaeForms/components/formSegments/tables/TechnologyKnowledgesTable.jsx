import React, { useEffect, useState } from "react";
import { Header, Segment, Table, Icon, Label } from "semantic-ui-react";
import TechnologyKnowledgeEditModal from "./../modals/technologyKnowledge/TechnologyKnowledgeEditModal";
import TechnologyKnowledgeAddModal from "./../modals/technologyKnowledge/TechnologyKnowledgeAddModal";
import TechnologyKnowledgeService from "./../../../../../services/technologyKnowledgeService";
import DeleteModal from "./../../../../../utilities/DeleteModal";

export default function TechnologyKnowledgesTable({
  currentCurriculumVitaeId,
}) {
  const [currentTechnologyKnowledges, setCurrentTechnologyKnowledges] =
    useState([]);

  /*
  {
      name: "",
      curriculumVitae: { id: "" },
  }
  */

  useEffect(() => {
    let technologyKnowledgeService = new TechnologyKnowledgeService();

    technologyKnowledgeService
      .getAll()
      .then((result) =>
        setCurrentTechnologyKnowledges(
          result.data.data.filter(
            (technologyKnowledge) =>
              technologyKnowledge.curriculumVitae.id ===
              currentCurriculumVitaeId
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
        icon="thumbtack"
        content="Technology Knowledge List"
      />
      <Table verticalAlign="middle" padded celled selectable>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {currentTechnologyKnowledges.map((technologyKnowledge, index) => (
            <Table.Row textAlign="center" key={index}>
              <Table.Cell>
                <TechnologyKnowledgeEditModal
                  currentTechnologyKnowledge={technologyKnowledge}
                />
              </Table.Cell>
              <Table.Cell>{technologyKnowledge.name}</Table.Cell>
              <Table.Cell>
                <DeleteModal
                  service={new TechnologyKnowledgeService()}
                  entityId={technologyKnowledge.id}
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
                  {currentTechnologyKnowledges.length} technology knowledges
                  listed.
                </span>
              </Segment>
              <Label tag color="olive">
                <TechnologyKnowledgeAddModal
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
