import React from "react";
import { Form, Segment } from 'semantic-ui-react';

export default function UserInfoSegment({ formik }) {
  return (
    <Segment padded raised>
      <Form.Group widths="equal">
        <Form.Input
          id="email"
          name="email"
          label="Email"
          icon="mail"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors?.email}
          placeholder="example@example.com"
        />
        <Form.Input
          id="password"
          name="password"
          label="Password"
          icon="lock"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.errors?.password}
        />
      </Form.Group>
    </Segment>
  );
}
