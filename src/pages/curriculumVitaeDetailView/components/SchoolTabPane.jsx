import React from "react";
import { Divider, List, Tab } from "semantic-ui-react";

export default function SchoolTabPane() {
  return (
    <div>
      <Tab.Pane>
        <List animated>
          <List.Item icon="graduation" content="School 1" />
          <List.Item icon="building outline" content="Department 1" />
          <List.Item icon="calendar plus outline" content="Start Date" />
          <List.Item icon="calendar check outline" content="End Date" />
        </List>
        <Divider />
      </Tab.Pane>
    </div>
  );
}
