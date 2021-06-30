import React from "react";
import WorkExperiencesTable from './tables/WorkExperiencesTable';
import { Segment } from 'semantic-ui-react';

export default function WorkExperienceSegment({ currentCurriculumVitaeId }) {
  return (
    <Segment padded raised>
      <WorkExperiencesTable currentCurriculumVitaeId={currentCurriculumVitaeId} />
    </Segment>
  );
}
