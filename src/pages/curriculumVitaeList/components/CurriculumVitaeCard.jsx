import React from "react";
import { Card } from "semantic-ui-react";
import CurriculumVitaeInfo from "./CurriculumVitaeInfo";
import CurriculumVitaeButtonGroup from "./CurriculumVitaeButtonGroup";

export default function CurriculumVitaeCard({ currentCurriculumVitae }) {
  return (
    <Card key={currentCurriculumVitae.id}>
      <Card.Content>
        <CurriculumVitaeInfo currentCurriculumVitae={currentCurriculumVitae} />
      </Card.Content>

      <Card.Content extra>
        <CurriculumVitaeButtonGroup
          currentCurriculumVitae={currentCurriculumVitae}
        />
      </Card.Content>
    </Card>
  );
}
