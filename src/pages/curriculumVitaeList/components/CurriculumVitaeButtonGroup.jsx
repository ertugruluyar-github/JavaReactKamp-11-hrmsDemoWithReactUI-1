import React from "react";
import { Button, Icon } from "semantic-ui-react";
import CurriculumVitaeDetailViewModal from "./CurriculumVitaeDetailViewModal";
import CurriculumVitaeEditModal from "./CurriculumVitaeEditModal";

export default function CurriculumVitaeButtonGroup({ currentCurriculumVitae }) {
  return (
    <Button.Group fluid>
      <CurriculumVitaeDetailViewModal
        currentCurriculumVitae={currentCurriculumVitae}
      />
      <Button.Or />
      <CurriculumVitaeEditModal
        currentCurriculumVitae={currentCurriculumVitae}
      />
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
