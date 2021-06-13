import React from "react";
import { Divider, List, Tab } from "semantic-ui-react";

export default function WorkExperienceTabPane() {
  return (
    <div>
      <Tab.Pane>
        <List animated>
          <List.Item icon="map marker alternate" content="Work Place 1" />
          <List.Item icon="dot circle outline" content="Position 1" />
          <List.Item icon="calendar plus outline" content="Start Date" />
          <List.Item icon="calendar check outline" content="End Date" />
        </List>
        <Divider />
      </Tab.Pane>
    </div>
  );
}
