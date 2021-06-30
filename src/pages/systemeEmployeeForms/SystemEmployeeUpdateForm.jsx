import React from "react";
import { useFormik } from "formik";
import systemEmployeeOnSubmitUpdate from "./components/systemEmployeeOnSubmitUpdate";
import SystemEmployeeForm from "./components/SystemEmployeeForm";
import systemEmployeeValidationSchema from "./components/systemEmployeeValidationSchema";

export default function SystemEmployeeUpdateForm({ currentSystemEmployee }) {
  const currentInitialValues = {
    description: currentSystemEmployee.description,
    githubLink: currentSystemEmployee.githubLink,
    linkedinLink: currentSystemEmployee.linkedinLink,
    photoLink: currentSystemEmployee.photoLink,
    jobSeeker: currentSystemEmployee.jobSeeker,
  };
  
  const formik = useFormik({
    initialValues: currentInitialValues,
    validationSchema: systemEmployeeValidationSchema,
    onSubmit: (values) => {
      systemEmployeeOnSubmitUpdate(
        values,
        currentSystemEmployee.id,
        currentSystemEmployee.jobSeeker.id
      );
    },
  });

  return (
    <SystemEmployeeForm
      headerIconName="building"
      headerContent="Update System Employee"
      SubmitButtonIconName="save"
      SubmitButtonText="Update"
      formik={formik}
      currentSystemEmployeeId={currentSystemEmployee.id}
    />
  );
}
