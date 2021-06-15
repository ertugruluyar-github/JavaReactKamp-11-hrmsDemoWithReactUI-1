import React, { useState, useEffect } from "react";
import CityList from "./components/CityList";
import EmployeePositionList from "./components/EmployeePositionList";
import { useFormik } from "formik";
import { Form, Button, Label, FormTextArea, Input } from "semantic-ui-react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import JobAdvertisementService from "./../../services/jobAdvertisementService";

export default function JobAdvertisementAddForm() {
  let jobAdvertisementService = new JobAdvertisementService();
  const history = useHistory();

  let addJobAdvertisements = (values) => {
    jobAdvertisementService.addJobAdvertisement(values);
  };

  const ValidationSchema = Yup.object().shape({
    description: Yup.string().required("Required"),
    minSalary: Yup.number()
      .required("Required")
      .min(0, "Minimum salary must be positive."),
    maxSalary: Yup.number()
      .required("Required")
      .min(0, "Minimum salary must be positive."),
    numberOfPosition: Yup.string()
      .required("Required")
      .min(1, "Number of positions must be positive.")
      .min(this.maxSalary, "Minimum salary must be greather than minimum salary."),
    applicationDeadline: Yup.date().required("Required"),
    employeePositionId: Yup.string().required("Required"),
    cityId: Yup.string().required("Required"),
    workTimeTypeId: Yup.string().required("Required"),
    workPlaceTypeId: Yup.string().required("Required"),
    active: Yup.bool().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      minSalary: "",
      maxSalary: "",
      numberOfPosition: "",
      applicationDeadline: "",
      employeePositionId: "",
      cityId: "",
      workTimeTypeId: "",
      workPlaceTypeId: "",
      active: true,
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      values.employerId = 1;
      addJobAdvertisements(values);
      alert(
        "Job Advertisement added successfully. You must wait confirm to your Job Advertisement by our personal."
      );
      history.push("/activejobadvertisements");
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          type="text"
          control={FormTextArea}
          error={formik.errors.description}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
