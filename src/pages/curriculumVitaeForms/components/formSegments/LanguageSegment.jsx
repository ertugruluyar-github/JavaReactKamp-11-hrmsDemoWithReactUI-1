import React from "react";
import { Segment } from "semantic-ui-react";
import LanguagesTable from "./tables/LanguagesTable";

export default function LanguageSegment({ currentCurriculumVitaeId }) {
  return (
    <Segment padded raised>
      <LanguagesTable currentCurriculumVitaeId={currentCurriculumVitaeId} />
    </Segment>
  );
}