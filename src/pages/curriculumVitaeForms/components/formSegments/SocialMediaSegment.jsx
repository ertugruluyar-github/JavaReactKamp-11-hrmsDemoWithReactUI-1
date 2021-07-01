import React from "react";
import { Segment, Form } from 'semantic-ui-react';

export default function SocialMediaSegment({ formik }) {
  return (
    <Segment padded raised>
      <Form.Group>
        <Form.Input
          id="githubLink"
          name="githubLink"
          label="Github"
          icon="github"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.githubLink}
          placeholder="https://github.com/username"
          width={8}
        />
        <Form.Input
          id="linkedinLink"
          name="linkedinLink"
          label="LinkedIn"
          icon="linkedin"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.linkedinLink}
          error={formik.errors?.linkedinLink}
          placeholder="https://www.linkedin.com/in/username"
          width={8}
        />
      </Form.Group>
    </Segment>
  );
}
