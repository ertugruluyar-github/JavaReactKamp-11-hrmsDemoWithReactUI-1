import React from "react";
import { Segment, Form } from 'semantic-ui-react';

export default function DescriptionSegment({ formik }) {
  return (
    <Segment padded raised>
      <Form.TextArea
        id="description"
        name="description"
        label="Description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        error={formik.errors.description}
        placeholder="Tell us your curriculum vitae description."
      />
    </Segment>
  );
}
