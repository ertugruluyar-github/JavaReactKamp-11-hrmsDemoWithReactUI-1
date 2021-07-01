import React from "react";
import { useFormik } from "formik";
import workExperienceValidationShema from "./workExperienceValidationSchema";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceService from "./../../../../../../services/workExperienceService";
import customOnSubmitUpdate from "../../../../../../utilities/customOnSubmitUpdate";

export default function WorkExperienceUpdateForm({ currentWorkExperience }) {
  let workExperienceUpdateFormik = useFormik({
    initialValues: currentWorkExperience,
    validationSchema: workExperienceValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentWorkExperience.curriculumVitae.id;
      customOnSubmitUpdate(
        new WorkExperienceService(),
        values,
        "Work experience updated successfully."
      );
    },
  });

  return (
    <WorkExperienceForm
      headerIconName="map marker alternate"
      headerContent="Update Work Experience"
      submitButtonIconName="save"
      submitButtonText="Update"
      formik={workExperienceUpdateFormik}
    />
  );
}
