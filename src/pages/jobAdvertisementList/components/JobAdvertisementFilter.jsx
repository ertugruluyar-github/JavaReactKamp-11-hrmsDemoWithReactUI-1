import React from "react";
import WorkingPlaceTypeFilterSelect from "./WorkingPlaceTypeFilterSelect";
import WorkingTimeTypeFilterSelect from "./WorkingTimeTypeFilterSelect";
import { Form, Header, Icon, Label } from "semantic-ui-react";

export default function JobAdvertisementFilter({
  handleFilterVisible,
  handleFilter,
}) {
  return (
    <Form>
      <Header inverted content="Filter" textAlign="left" as="h2" />
      <Label corner="right" onClick={handleFilterVisible}>
        <Icon name="filter" color="blue" />
      </Label>
      <Form.Group>
        <WorkingPlaceTypeFilterSelect handleFilter={handleFilter} />
        <WorkingTimeTypeFilterSelect handleFilter={handleFilter} />
      </Form.Group>
    </Form>
  );
}
