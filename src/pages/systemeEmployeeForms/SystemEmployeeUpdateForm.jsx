import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import SystemEmployeeForm from "./components/SystemEmployeeForm";
import systemEmployeeValidationSchema from "./components/systemEmployeeValidationSchema";
import SystemEmployeeService from "./../../services/systemEmployeeService";
import { useHistory, useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";
import customOnSubmitUpdate from "./../../utilities/customOnSubmitUpdate";
import systemEmployeeInitialValues from './components/systemEmployeeInitialValues';

export default function SystemEmployeeUpdateForm() {
  const history = useHistory();
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
      customOnSubmitUpdate(
        new SystemEmployeeService(),
        values,
        "System employee updated successfully."
      );
      history.push("/systememployeelist");
    },
  });
  /*
  const currentInitialValues = currentSystemEmployee
    ? {
        id: currentSystemEmployee.id,
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

  return currentSystemEmployee ? (
    <SystemEmployeeForm
      headerIconName="id badge"
      headerContent="Update System Employee"
      submitButtonIconName="save"
      submitButtonText="Update"
      formik={formik}
      currentSystemEmployee={currentSystemEmployee}
    />
  ) : (
    <Header color="orange" content="ERROR 404 NOT FOUND" as="h3" />
  );
}
