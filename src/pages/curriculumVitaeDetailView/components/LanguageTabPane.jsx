import React from "react";
import { Divider, List, Tab } from "semantic-ui-react";

export default function LanguageTabPane() {
  return (
    <div>
      <Tab.Pane>
        <List animated>
          <List.Item icon="graduation" content="School 1" />
          <List.Item icon="building outline" content="Department 1" />
        </List>
        <Divider />
      </Tab.Pane>
    </div>
  );
}
