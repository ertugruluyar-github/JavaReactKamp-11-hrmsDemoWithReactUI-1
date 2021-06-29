import React from "react";
import { Card, Image, Segment } from "semantic-ui-react";
import LanguagesPopup from "./LanguagesPopup";
import TechnologyKnowledgesPopup from "./TechnologyKnowledgesPopup";

export default function CurriculumVitaeInfo({ currentCurriculumVitae }) {
  return (
    <>
      <Image floated="left" size="tiny" src={currentCurriculumVitae.photoLink} />
      <Card.Header>
        {currentCurriculumVitae.jobSeeker.firstName +
          " " +
          currentCurriculumVitae.jobSeeker.lastName}
      </Card.Header>
      <Card.Meta textAlign="left">
        <span>Created in {currentCurriculumVitae.createDate}</span>
      </Card.Meta>
      <Segment basic floated="left" compact>
        <LanguagesPopup curriculumVitaeId={currentCurriculumVitae.id} />
        <TechnologyKnowledgesPopup curriculumVitaeId={currentCurriculumVitae.id} />
      </Segment>

      <Card.Description textAlign="left">
        <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{currentCurriculumVitae.description}</p>
      </Card.Description>
    </>
  );
}
