import React from "react";
import { useFormik } from "formik";
import { Segment, Form, Divider, Header } from "semantic-ui-react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import JobAdvertisementService from "./../../services/jobAdvertisementService";
import WorkingPlaceTypeFormSelect from "./components/WorkingPlaceTypeFormSelect";
import WorkingTimeTypeFormSelect from "./components/WorkingTimeTypeFormSelect";
import CityFormSelect from "./components/CityFormSelect";
import EmployeePositionFormSelect from "./components/EmployeePositionFormSelect";

export default function JobAdvertisementAddForm() {
  let jobAdvertisementService = new JobAdvertisementService();
  const history = useHistory();

  let addJobAdvertisements = (values) => {
    jobAdvertisementService.addJobAdvertisement(values).then((response) => {
      if (response.status === 200) {
        console.log(response);
        alert(
          "Job Advertisement added successfully. You must wait confirm to your Job Advertisement by our personal."
        );
      }
    });
  };

  const ValidationSchema = Yup.object().shape({
    description: Yup.string().required("Required"),
    minSalary: Yup.number()
      .required("Required")
      .min(0, "Minimum salary must be positive."),
    maxSalary: Yup.number()
      .required("Required")
      .min(0, "Minimum salary must be positive."),
    numberOfPosition: Yup.number()
      .required("Required")
      .min(1, "Number of positions must be positive."),
    applicationDeadline: Yup.date().required("Required"),
    employeePositionId: Yup.number().required("Required"),
    cityId: Yup.number().required("Required"),
    workingPlaceTypeId: Yup.number().required("Required"),
    workingTimeTypeId: Yup.number().required("Required"),
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
      workingPlaceTypeId: "",
      workingTimeTypeId: "",
      active: true,
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      values.employerId = 1;
      console.log(values);
      addJobAdvertisements(values);
      history.push("/activejobadvertisements");
    },
  });

  ValidationSchema.fields.maxSalary.min(
    formik.values.minSalary,
    "Maximum salary must be greather than minimum salary."
  );

  const handleChange = (fieldValue, fieldName) => {
    formik.setFieldValue(fieldName, fieldValue);
  };

  return (
    <div>
      <Segment padded raised>
        <Header dividing color="blue" icon="bullhorn" content="New Job Advertisement" />
        <Form onSubmit={formik.handleSubmit}>
          <Form.TextArea
            id="description"
            name="description"
            label="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={formik.errors.description}
            placeholder="Tell us your job advertisement description."
          />
          <Divider />
          <Form.Group>
            <Form.Input
              id="minSalary"
              name="minSalary"
              label="Minimum Salary"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.minSalary}
              error={formik.errors.minSalary}
              placeholder="2000"
              width={4}
            />
            <Form.Input
              id="maxSalary"
              name="maxSalary"
              label="Maximum Salary"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.maxSalary}
              error={formik.errors.maxSalary}
              placeholder="4000"
              width={4}
            />
            <Form.Input
              id="numberOfPosition"
              name="numberOfPosition"
              label="Number of Position"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numberOfPosition}
              error={formik.errors.numberOfPosition}
              placeholder="3"
              width={4}
            />
            <Form.Input
              id="applicationDeadline"
              name="applicationDeadline"
              label="Application Deadline"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.applicationDeadline}
              error={formik.errors.applicationDeadline}
              placeholder="2021-03-24"
              width={4}
            />
          </Form.Group>
          <Divider />
          <Form.Group>
            <EmployeePositionFormSelect
              handleChange={handleChange}
              onBlur={formik.onBlur}
              value={formik.values.employeePositionId}
              error={formik.errors.employeePositionId}
            />
            <CityFormSelect
              handleChange={handleChange}
              onBlur={formik.onBlur}
              value={formik.values.cityId}
              error={formik.errors.cityId}
            />
            <WorkingPlaceTypeFormSelect
              handleChange={handleChange}
              onBlur={formik.onBlur}
              value={formik.values.workingPlaceTypeId}
              error={formik.errors.workingPlaceTypeId}
            />
            <WorkingTimeTypeFormSelect
              handleChange={handleChange}
              onBlur={formik.onBlur}
              value={formik.values.workingTimeTypeId}
              error={formik.errors.workingTimeTypeId}
            />
          </Form.Group>
          <Divider />
          <Form.Checkbox
            id="active"
            name="active"
            label="İs Active?"
            slider
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.active}
            error={formik.errors.active}
          ></Form.Checkbox>
          <Form.Button type="submit">Add</Form.Button>
        </Form>
      </Segment>
    </div>
  );
}
