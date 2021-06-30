import React from "react";
import { useFormik } from "formik";
import { Segment, Form, Header, Button, Icon } from "semantic-ui-react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import WorkingPlaceTypeFormSelect from "./components/WorkingPlaceTypeFormSelect";
import WorkingTimeTypeFormSelect from "./components/WorkingTimeTypeFormSelect";
import CityFormSelect from "./components/CityFormSelect";
import EmployeePositionFormSelect from "./components/EmployeePositionFormSelect";
import { useDispatch } from "react-redux";
import { addToMyJobAdvertisements } from "../../store/actions/myJobAdvertisementsActions";
import { toast } from "react-toastify";

export default function JobAdvertisementAddForm() {
  let jobAdvertisementService = new JobAdvertisementService();
  const history = useHistory();

  const dispatch = useDispatch();

  let addJobAdvertisements = (values) => {
    jobAdvertisementService
      .add(values)
      .then((response) => {
        if (response.status === 200) {
          toast.success(
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
    employeePosition: Yup.object().shape({
      id: Yup.number().required("Required"),
    }),
    city: Yup.object().shape({ id: Yup.number().required("Required") }),
    workingPlaceType: Yup.object().shape({
      id: Yup.number().required("Required"),
    }),
    workingTimeType: Yup.object().shape({
      id: Yup.number().required("Required"),
    }),
    active: Yup.bool().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      minSalary: "",
      maxSalary: "",
      numberOfPosition: "",
      applicationDeadline: "",
      employeePosition: {},
      city: {},
      workingPlaceType: {},
      workingTimeType: {},
      employer: {},
      active: true,
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      values.employer.id = 1;
      console.log(values);
      addJobAdvertisements(values);
      handleAddToMyJobAdvertisement(values);
      history.push("/activejobadvertisements");
    },
  });

  const handleChange = (fieldValue, fieldName) => {
    formik.setFieldValue(fieldName, fieldValue);
  };

  const handleAddToMyJobAdvertisement = (jobAdvertisement) => {
    dispatch(addToMyJobAdvertisements(jobAdvertisement));
    toast.success("Added into your Job Advertisements");
  };

  return (
    <div>
      <Segment padded raised>
        <Header
          dividing
          color="blue"
          icon="bullhorn"
          content="New Job Advertisement"
        />
        <Form onSubmit={formik.handleSubmit}>
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
              placeholder="Tell us your job advertisement description."
            />
          </Segment>
          <Segment padded raised>
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
          </Segment>
          <Segment padded raised>
            <Form.Group>
              <EmployeePositionFormSelect
                handleChange={handleChange}
                onBlur={formik.onBlur}
                value={formik.values.employeePosition.id}
                error={formik.errors.employeePosition?.id}
              />
              <CityFormSelect
                handleChange={handleChange}
                onBlur={formik.onBlur}
                value={formik.values.city.id}
                error={formik.errors.city?.id}
              />
              <WorkingPlaceTypeFormSelect
                handleChange={handleChange}
                onBlur={formik.onBlur}
                value={formik.values.workingPlaceType.id}
                error={formik.errors.workingPlaceType?.id}
              />
              <WorkingTimeTypeFormSelect
                handleChange={handleChange}
                onBlur={formik.onBlur}
                value={formik.values.workingTimeType.id}
                error={formik.errors.workingTimeType?.id}
              />
            </Form.Group>
          </Segment>
          <Segment basic>
            <Form.Checkbox
              id="active"
              name="active"
              label="Is active?"
              slider
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.active}
              error={formik.errors.active}
            ></Form.Checkbox>
          </Segment>
          <Segment basic>
            <Form.Button type="submit" animated="fade" positive fluid>
              <Button.Content visible>
                <Icon name="save" />
              </Button.Content>
              <Button.Content hidden>Save</Button.Content>
            </Form.Button>
          </Segment>
        </Form>
      </Segment>
    </div>
  );
}
