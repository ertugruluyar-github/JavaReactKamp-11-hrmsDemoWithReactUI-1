import React from "react";
import { Button, Icon } from "semantic-ui-react";
import CurriculumVitaeDetailViewModal from "./CurriculumVitaeDetailViewModal";

export default function CurriculumVitaeButtonGroup({ curriculumVitae }) {
  return (
    <Button.Group fluid>
      <CurriculumVitaeDetailViewModal curriculumVitae={curriculumVitae} />
      <Button.Or />
      <Button color="orange" animated="fade">
        <Button.Content visible>
          <Icon name="edit" />
        </Button.Content>
        <Button.Content hidden>Edit</Button.Content>
      </Button>
      <Button.Or />
      <Button color="red" animated="fade">
        <Button.Content visible>
          <Icon name="trash" />
        </Button.Content>
        <Button.Content hidden>Delete</Button.Content>
      </Button>
    </Button.Group>
  );
}
