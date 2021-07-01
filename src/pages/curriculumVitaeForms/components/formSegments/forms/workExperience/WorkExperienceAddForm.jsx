import React from "react";
import { useFormik } from "formik";
import workExperienceValidationShema from "./workExperienceValidationSchema";
import WorkExperienceForm from "./WorkExperienceForm";
import workExperienceInitialValues from "./workExperienceInitialValues";
import WorkExperienceService from "./../../../../../../services/workExperienceService";
import customOnSubmitAdd from "../../../../../../utilities/customOnSubmitAdd";
import { useParams, useHistory } from "react-router-dom";

export default function WorkExperienceAddForm() {
  const { currentCurriculumVitaeId } = useParams();
  const history = useHistory();
  
  let workExperienceAddFormik = useFormik({
    initialValues: workExperienceInitialValues,
    validationSchema: workExperienceValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentCurriculumVitaeId;
      console.log(values);
      customOnSubmitAdd(
        new WorkExperienceService(),
        values,
        "Work experience added successfully."
      );
      history.push("/curriculumvitaelist");
    },
  });

  return (
    <WorkExperienceForm
      headerIconName="map marker alternate"
      headerContent="Add Work Experience"
      submitButtonIconName="save"
      submitButtonText="Add"
      formik={workExperienceAddFormik}
    />
  );
}
