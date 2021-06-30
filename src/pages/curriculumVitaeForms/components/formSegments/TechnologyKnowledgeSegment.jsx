import React from "react";
import { Segment } from 'semantic-ui-react';
import TechnologyKnowledgesTable from './tables/TechnologyKnowledgesTable';

export default function TechnologyKnowledgeSegment({
  currentCurriculumVitaeId,
}) {
  return (
    <Segment padded raised>
      <TechnologyKnowledgesTable currentCurriculumVitaeId={currentCurriculumVitaeId} />
    </Segment>
  );
}
