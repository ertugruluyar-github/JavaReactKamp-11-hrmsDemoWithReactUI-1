import React from "react";
import WorkingPlaceTypeFilterSelect from "./WorkingPlaceTypeFilterSelect";
import WorkingTimeTypeFilterSelect from "./WorkingTimeTypeFilterSelect";
import { Form } from "semantic-ui-react";

export default function JobAdvertisementFilter() {
  return (
    <Form>
      <Form.Group>
        <WorkingPlaceTypeFilterSelect />
        <WorkingTimeTypeFilterSelect />
      </Form.Group>
    </Form>
  );
}
