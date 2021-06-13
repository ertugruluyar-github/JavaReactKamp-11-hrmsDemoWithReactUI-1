import React from "react";
import { Divider, List, Tab } from "semantic-ui-react";

export default function TechnologyKnowledgeTabPane() {
  return (
    <div>
      <Tab.Pane>
        <List animated>
          <List.Item icon="thumbtack" content="Technology Knowledge 1" />
        </List>
        <Divider />
      </Tab.Pane>
    </div>
  );
}
