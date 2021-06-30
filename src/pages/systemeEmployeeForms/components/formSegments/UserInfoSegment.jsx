import React from "react";

export default function UserInfoSegment({ formik }) {
  return (
    <Segment padded raised>
      <Form.Group>
        <Form.Input
          id="email"
          name="email"
          label="Email"
          icon="text"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email}
          placeholder="example@example.com"
          width={8}
        />
        <Form.Input
          id="password"
          name="password"
          label="Password"
          icon="text"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.errors.password}
          width={8}
        />
      </Form.Group>
    </Segment>
  );
}
