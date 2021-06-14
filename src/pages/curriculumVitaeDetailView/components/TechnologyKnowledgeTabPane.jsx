import React, { useState, useEffect } from "react";
import { Divider, List, Tab } from "semantic-ui-react";
import TechnologyKnowledgeService from "../../../services/technologyKnowledgeService";

export default function TechnologyKnowledgeTabPane({
  currentCurriculumVitaeId,
}) {
  const [technologyKnowledges, setTechnologyKnowledges] = useState([]);
  useEffect(() => {
    let technologyKnowledgeService = new TechnologyKnowledgeService();
    technologyKnowledgeService
      .getTechnologyKnowledges()
      .then((result) => setTechnologyKnowledges(result.data.data));
  }, []);

  return (
    <Tab.Pane>
      {technologyKnowledges
        .filter(
          (technologyKnowledge) =>
            technologyKnowledge.curriculumVitae.id === currentCurriculumVitaeId
        )
        .map((technologyKnowledge) => (
          <div key={technologyKnowledge.id}>
            <List animated key={technologyKnowledge.id}>
              <List.Item icon="thumbtack" content={technologyKnowledge.name} />
            </List>
            <Divider />
          </div>
        ))}
    </Tab.Pane>
  );
}
