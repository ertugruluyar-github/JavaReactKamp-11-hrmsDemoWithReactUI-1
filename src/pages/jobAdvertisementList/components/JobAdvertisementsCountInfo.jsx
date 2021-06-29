import React from "react";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

export default function JobAdvertisementsCountInfo({
  currentDataCount,
  allDataCount,
}) {
  return (
    <Segment floated="left">
      <Icon name="info circle" color="grey" size="large" />
      <span>
        {currentDataCount} Job advertisements listed (in {allDataCount}).
      </span>
    </Segment>
  );
}
