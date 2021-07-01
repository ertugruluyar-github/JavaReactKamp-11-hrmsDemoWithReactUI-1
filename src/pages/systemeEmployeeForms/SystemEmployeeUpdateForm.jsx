import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import systemEmployeeOnSubmitUpdate from "./components/systemEmployeeOnSubmitUpdate";
import SystemEmployeeForm from "./components/SystemEmployeeForm";
import systemEmployeeValidationSchema from "./components/systemEmployeeValidationSchema";
import SystemEmployeeService from "./../../services/systemEmployeeService";
import { useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";
import systemEmployeeInitialValues from "./components/systemEmployeeInitialValues";

export default function SystemEmployeeUpdateForm() {
  const { currentSystemEmployeeId } = useParams();
  const [currentSystemEmployee, setCurrentSystemEmployee] = useState({});

  useEffect(() => {
    let systemEmployeeService = new SystemEmployeeService();
    systemEmployeeService
      .get(currentSystemEmployeeId)
      .then((result) => setCurrentSystemEmployee(result.data.data));
  }, [currentSystemEmployeeId]);

  const formik = useFormik({
    initialValues: systemEmployeeInitialValues,
    validationSchema: systemEmployeeValidationSchema,
    onSubmit: (values) => {
      systemEmployeeOnSubmitUpdate(
        values,
        currentSystemEmployee.id,
        currentSystemEmployee.jobSeeker.id
      );
    },
  });

  useEffect(() => {
    formik.setValues(currentSystemEmployee);
  }, [currentSystemEmployee]);
  /*
  let currentInitialValues = currentSystemEmployee
    ? {
        firstName: currentSystemEmployee.firstName,
        lastName: currentSystemEmployee.lastName,
        nationalityId: currentSystemEmployee.nationalityId,
        dateOfBirth: currentSystemEmployee.dateOfBirth,
        gender: currentSystemEmployee.gender,
        email: currentSystemEmployee.email,
        password: currentSystemEmployee.password,
      }
    : systemEmployeeInitialValues;
*/
  console.log(formik.values);

  return currentSystemEmployee ? (
    <SystemEmployeeForm
      headerIconName="id badge"
      headerContent="Update System Employee"
      SubmitButtonIconName="save"
      SubmitButtonText="Update"
      formik={formik}
    />
  ) : (
    <Header color="orange" content="ERROR 404 NOT FOUND" as="h3" />
  );
}
