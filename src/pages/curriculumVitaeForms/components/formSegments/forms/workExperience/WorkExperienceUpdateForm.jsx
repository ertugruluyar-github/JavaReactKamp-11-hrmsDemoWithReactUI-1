import React from "react";
import { useFormik } from "formik";
import workExperienceValidationShema from "./workExperienceValidationSchema";
import workExperienceOnSubmitUpdate from "./workExperienceOnSubmitUpdate";
import WorkExperienceForm from "./WorkExperienceForm";

export default function WorkExperienceUpdateForm({ currentWorkExperience }) {
  let workExperienceUpdateFormik = useFormik({
    initialValues: currentWorkExperience,
    validationSchema: workExperienceValidationShema,
    onSubmit: (values) => {
      workExperienceOnSubmitUpdate(
        values,
        currentWorkExperience.curriculumVitae.id
      );
    },
  });

  return (
    <WorkExperienceForm
      headerIconName="map marker alternate"
      headerContent="Update Work Experience"
      SubmitButtonIconName="save"
      SubmitButtonText="Update"
      formik={workExperienceUpdateFormik}
    />
  );
}
