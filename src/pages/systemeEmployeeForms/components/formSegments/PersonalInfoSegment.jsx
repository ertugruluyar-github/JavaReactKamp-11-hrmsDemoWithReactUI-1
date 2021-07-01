import React from "react";
import { Segment, Form } from 'semantic-ui-react';

export default function PersonalInfoSegment({ formik }) {
  return (
    <Segment padded raised>
      <Form.Group widths="equal">
        <Form.Input
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          error={formik.errors?.firstName}
          placeholder="Ahmet"
        />
        <Form.Input
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={formik.errors?.lastName}
          placeholder="Hekimcan"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          id="nationalityId"
          name="nationalityId"
          label="Nationality Id"
          icon="world"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nationalityId}
          error={formik.errors?.nationalityId}
          placeholder="11111111111"
        />
        <Form.Input
          id="dateOfBirth"
          name="dateOfBirth"
          label="Date of Birth"
          icon="calendar"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dateOfBirth}
          error={formik.errors?.dateOfBirth}
          placeholder="05.06.2001"
        />
        <Form.Input
          id="gender"
          name="gender"
          label="Gender"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
          error={formik.errors?.gender}
          placeholder="Male"
        />
      </Form.Group>
    </Segment>
  );
}
