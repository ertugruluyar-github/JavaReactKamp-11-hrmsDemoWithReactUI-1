import React from "react";
import { Card, Image, Segment } from "semantic-ui-react";
import LanguagesPopup from "./LanguagesPopup";
import TechnologyKnowledgesPopup from "./TechnologyKnowledgesPopup";

export default function CurriculumVitaeInfo({ curriculumVitae }) {
  return (
    <>
      <Image floated="left" size="tiny" src={curriculumVitae.photoLink} />
      <Card.Header>
        {curriculumVitae.jobSeeker.firstName +
          " " +
          curriculumVitae.jobSeeker.lastName}
      </Card.Header>
      <Card.Meta textAlign="left">
        <span>Created in {curriculumVitae.createDate}</span>
      </Card.Meta>
      <Segment basic floated="left" compact>
        <LanguagesPopup curriculumVitaeId={curriculumVitae.id} />
        <TechnologyKnowledgesPopup curriculumVitaeId={curriculumVitae.id} />
      </Segment>

      <Card.Description textAlign="left">
        <p>{curriculumVitae.description}</p>
      </Card.Description>
    </>
  );
}
