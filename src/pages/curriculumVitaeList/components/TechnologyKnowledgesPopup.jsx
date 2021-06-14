import React, { useState, useEffect } from "react";
import { Icon, Label, Popup, Segment } from "semantic-ui-react";
import TechnologyKnowledgeService from "./../../../services/technologyKnowledgeService";

export default function TechnologyKnowledgesPopup({ curriculumVitaeId }) {
  const [technologyKnowledges, setTechnologyKnowledges] = useState([]);
  useEffect(() => {
    let technologyKnowledgeService = new TechnologyKnowledgeService();
    technologyKnowledgeService
      .getTechnologyKnowledges()
      .then((result) => setTechnologyKnowledges(result.data.data));
  }, []);

  return (
    <Popup
      trigger={
        <Label icon="thumbtack" content="Technology Knowledges" color="blue" />
      }
    >
      <Popup.Header>
        <Icon name="thumbtack" color="blue" />
        Technology Knowledges
      </Popup.Header>
      <Popup.Content>
        {technologyKnowledges
          .filter(
            (technologyKnowledge) =>
              technologyKnowledge.curriculumVitae.id === curriculumVitaeId
          )
          .map((technologyKnowledge) => (
            <Segment.Inline key={technologyKnowledge.id}>
              {technologyKnowledge.name}
            </Segment.Inline>
          ))}
      </Popup.Content>
    </Popup>
  );
}
