import React from "react";
import { useFormik } from "formik";
import employerValidationSchema from "./components/employerValidationSchema";
import EmployerForm from "./components/EmployerForm";
import employerInitialValues from "./components/employerInitialValues";
import { useHistory } from "react-router-dom";
import customOnSubmitAdd from "../../utilities/customOnSubmitAdd";
import EmployerService from "../../services/employerService";

export default function EmployerAddForm() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: employerInitialValues,
    validationSchema: employerValidationSchema,
    onSubmit: (values) => {
      customOnSubmitAdd(
        new EmployerService(),
        values,
        "Employer added successfully."
      );
      history.push("/employerlist");
    },
  });
  return (
    <EmployerForm
      headerIconName="building"
      headerContent="Add Employer"
      submitButtonIconName="save"
      submitButtonText="Add"
      formik={formik}
    />
  );
}
