import React from "react";
import { Card } from "semantic-ui-react";
import CurriculumVitaeInfo from "./CurriculumVitaeInfo";
import CurriculumVitaeButtonGroup from "./CurriculumVitaeButtonGroup";

export default function CurriculumVitaeCard({ curriculumVitae }) {
  return (
    <Card key={curriculumVitae.id}>
      <Card.Content>
        <CurriculumVitaeInfo curriculumVitae={curriculumVitae} />
      </Card.Content>

      <Card.Content extra>
        <CurriculumVitaeButtonGroup />
      </Card.Content>
    </Card>
  );
}
