import React from "react";

export default function TechnologyKnowledgesPopup() {
  return (
    <div>
      <Popup
        trigger={
          <Label
            icon="thumbtack"
            content="Technology Knowledges"
            color="blue"
          />
        }
      >
        <Popup.Header>
          <Icon name="thumbtack" color="blue" />
          Technology Knowledges
        </Popup.Header>
        <Popup.Content>
          <Segment.Inline>Java Developer</Segment.Inline>
          <Segment.Inline>Software Developer</Segment.Inline>
        </Popup.Content>
      </Popup>
    </div>
  );
}
