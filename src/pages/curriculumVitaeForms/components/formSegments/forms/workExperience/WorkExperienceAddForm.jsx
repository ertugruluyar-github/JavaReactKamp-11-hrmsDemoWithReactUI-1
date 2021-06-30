import React from "react";
import { useFormik } from "formik";
import workExperienceValidationShema from "./workExperienceValidationSchema";
import workExperienceOnSubmitAdd from "./workExperienceOnSubmitAdd";
import WorkExperienceForm from "./WorkExperienceForm";
import workExperienceInitialValues from './workExperienceInitialValues';

export default function WorkExperienceAddForm({ currentCurriculumVitaeId }) {
  let workExperienceAddFormik = useFormik({
    initialValues: workExperienceInitialValues,
    validationSchema: workExperienceValidationShema,
    onSubmit: (values) => {
      console.log(values)
      workExperienceOnSubmitAdd(values, currentCurriculumVitaeId);
    },
  });

  return (
    <WorkExperienceForm
      headerIconName="map marker alternate"
      headerContent="Add Work Experience"
      SubmitButtonIconName="save"
      SubmitButtonText="Add"
      formik={workExperienceAddFormik}
    />
  );
}
