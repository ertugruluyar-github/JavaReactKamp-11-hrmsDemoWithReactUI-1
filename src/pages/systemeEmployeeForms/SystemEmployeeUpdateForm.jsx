import React, { useEffect } from "react";
import { useFormik } from "formik";
import SystemEmployeeForm from "./components/SystemEmployeeForm";
import systemEmployeeValidationSchema from "./components/systemEmployeeValidationSchema";
import SystemEmployeeService from "./../../services/systemEmployeeService";
import { useHistory } from "react-router-dom";
import { Header } from "semantic-ui-react";
import systemEmployeeInitialValues from "./components/systemEmployeeInitialValues";
import customOnSubmitUpdate from "./../../utilities/customOnSubmitUpdate";

export default function SystemEmployeeUpdateForm({ currentSystemEmployee }) {
  //const history = useHistory();

  /*
  useEffect(() => {
    formik.setValues(currentSystemEmployee);
  }, [currentSystemEmployee]);
  */

  let currentInitialValues = currentSystemEmployee
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

  const formik = useFormik({
    initialValues: currentInitialValues,
    validationSchema: systemEmployeeValidationSchema,
    onSubmit: (values) => {
      customOnSubmitUpdate(
        new SystemEmployeeService(),
        values,
        "System employee updated successfully."
      );
      //history.push("/systememployeelist");
    },
  });

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
