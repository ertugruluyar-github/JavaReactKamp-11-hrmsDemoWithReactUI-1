import React from "react";
import { useFormik } from "formik";
import { Segment, Form, Divider, Header } from "semantic-ui-react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import JobAdvertisementService2 from "../../services/jobAdvertisementService2";
import WorkingPlaceTypeFormSelect2 from "./components/WorkingPlaceTypeFormSelect2";
import WorkingTimeTypeFormSelect2 from "./components/WorkingTimeTypeFormSelect2";
import CityFormSelect2 from "./components/CityFormSelect2";
import EmployeePositionFormSelect2 from "./components/EmployeePositionFormSelect2";

export default function JobAdvertisementAddForm2() {
  let jobAdvertisementService2 = new JobAdvertisementService2();
  const history = useHistory();

  let addJobAdvertisements = (values) => {
    jobAdvertisementService2
      .add(values)
      .then((response) => {
        if (response.status === 200) {
          alert(
            "Job Advertisement added successfully. You must wait confirm to your Job Advertisement by our personal." +
              "(NOT: İleride personel onaylma başlayınca onu kontrol ederim. Şimdilik onay olmadan da gözükür.)"
          );
        }
      })
      .catch((reason) => {
        console.log(reason);
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

  const handleChange = (fieldValue, fieldName) => {
    formik.setFieldValue(fieldName, fieldValue);
  };

  return (
    <div>
      <Segment padded raised>
        <Header
          dividing
          color="blue"
          icon="bullhorn"
          content="New Job Advertisement #2"
        />
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
            <EmployeePositionFormSelect2
              handleChange={handleChange}
              onBlur={formik.onBlur}
              value={formik.values.employeePositionId}
              error={formik.errors.employeePositionId}
            />
            <CityFormSelect2
              handleChange={handleChange}
              onBlur={formik.onBlur}
              value={formik.values.cityId}
              error={formik.errors.cityId}
            />
            <WorkingPlaceTypeFormSelect2
              handleChange={handleChange}
              onBlur={formik.onBlur}
              value={formik.values.workingPlaceTypeId}
              error={formik.errors.workingPlaceTypeId}
            />
            <WorkingTimeTypeFormSelect2
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
