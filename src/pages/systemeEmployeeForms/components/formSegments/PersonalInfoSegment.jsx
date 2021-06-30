import React from "react";
import { Segment, Form } from 'semantic-ui-react';

export default function PersonalInfoSegment({ formik }) {
  return (
    <Segment padded raised>
      <Form.Group>
        <Form.Input
          id="firstName"
          name="firstName"
          label="First Name"
          icon="text"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          error={formik.errors.firstName}
          placeholder="Ahmet"
          width={8}
        />
        <Form.Input
          id="lastName"
          name="lastName"
          label="Last Name"
          icon="text"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={formik.errors.lastName}
          placeholder="Hekimcan"
          width={8}
        />
        <Form.Input
          id="gender"
          name="gender"
          label="Gender"
          icon="gender"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
          error={formik.errors.gender}
          placeholder="Male"
          width={8}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          id="nationalityId"
          name="firsnationalityIdtName"
          label="Nationality Id"
          icon="text"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nationalityId}
          error={formik.errors.nationalityId}
          placeholder="11111111111"
          width={8}
        />
        <Form.Input
          id="dateOfBirth"
          name="dateOfBirth"
          label="Date of Birth"
          icon="text"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dateOfBirth}
          error={formik.errors.dateOfBirth}
          placeholder="05.06.2001"
          width={8}
        />
      </Form.Group>
    </Segment>
  );
}
