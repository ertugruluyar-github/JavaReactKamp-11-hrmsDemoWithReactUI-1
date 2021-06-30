import React from "react";
import { Segment } from "semantic-ui-react";
import SchoolsTable from "./tables/SchoolsTable";

export default function SchoolSegment({ currentCurriculumVitaeId }) {
  return (
    <Segment padded raised>
      <SchoolsTable currentCurriculumVitaeId={currentCurriculumVitaeId} />
    </Segment>
  );
}
