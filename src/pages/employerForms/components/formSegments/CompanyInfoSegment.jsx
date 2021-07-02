import React from "react";
import { Segment, Form } from "semantic-ui-react";

export default function CompanyInfoSegment({ formik }) {
  return (
    <Segment padded raised>
      <Form.Group widths="equal">
        <Form.Input
          id="companyName"
          name="companyName"
          label="Company Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyName}
          error={formik.errors?.companyName}
          placeholder="Oracle"
        />
        <Form.Input
          id="webSite"
          name="webSite"
          label="Web Site"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.webSite}
          error={formik.errors?.webSite}
          placeholder="www.oracle.com"
        />
      </Form.Group>
    </Segment>
  );
}
