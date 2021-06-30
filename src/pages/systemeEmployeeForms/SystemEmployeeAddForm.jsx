import React from "react";
import { useFormik } from "formik";
import systemEmployeeOnSubmitAdd from "./components/systemEmployeeOnSubmitAdd";
import systemEmployeeValidationSchema from "./components/systemEmployeeValidationSchema";
import SystemEmployeeForm from "./components/SystemEmployeeForm";
import systemEmployeeInitialValues from "./components/systemEmployeeInitialValues";
import { useHistory } from "react-router-dom";

export default function SystemEmployeeAddForm({ currentSystemEmployee }) {
  let history = useHistory();
  const formik = useFormik({
    initialValues: systemEmployeeInitialValues,
    validationSchema: systemEmployeeValidationSchema,
    onSubmit: (values) => {
      systemEmployeeOnSubmitAdd(
        values,
        history,
        currentSystemEmployee.id,
        currentSystemEmployee.jobSeeker.id
      );
    },
  });
  return (
    <SystemEmployeeForm
      headerIconName="building"
      headerContent="Add System Employee"
      SubmitButtonIconName="save"
      SubmitButtonText="Add"
      formik={formik}
    />
  );
}
