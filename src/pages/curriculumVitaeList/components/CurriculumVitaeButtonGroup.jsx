import React from "react";
import { Button } from "semantic-ui-react";
import CurriculumVitaeDetailViewModal from "./CurriculumVitaeDetailViewModal";
import CurriculumVitaeEditModal from "./CurriculumVitaeEditModal";
import DeleteModal from "./../../../utilities/DeleteModal";
import CurriculumVitaeService from "./../../../services/curriculumVitaeService";

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
      <DeleteModal
        service={new CurriculumVitaeService()}
        entityId={currentCurriculumVitae.id}
      />
    </Button.Group>
  );
}
