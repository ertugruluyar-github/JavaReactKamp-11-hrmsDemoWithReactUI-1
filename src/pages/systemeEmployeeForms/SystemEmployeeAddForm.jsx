import React from "react";
import { useFormik } from "formik";
import systemEmployeeValidationSchema from "./components/systemEmployeeValidationSchema";
import SystemEmployeeForm from "./components/SystemEmployeeForm";
import systemEmployeeInitialValues from "./components/systemEmployeeInitialValues";
import { useHistory } from "react-router-dom";
import customOnSubmitAdd from "./../../utilities/customOnSubmitAdd";
import SystemEmployeeService from "./../../services/systemEmployeeService";

export default function SystemEmployeeAddForm() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: systemEmployeeInitialValues,
    validationSchema: systemEmployeeValidationSchema,
    onSubmit: (values) => {
      customOnSubmitAdd(
        new SystemEmployeeService(),
        values,
        "System employee added successfully."
      );
      history.push("/systememployeelist");
    },
  });
  return (
    <SystemEmployeeForm
      headerIconName="id badge"
      headerContent="Add System Employee"
      submitButtonIconName="save"
      submitButtonText="Add"
      formik={formik}
    />
  );
}
