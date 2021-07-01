import React from "react";
import { useFormik } from "formik";
import CurriculumVitaeForm from "./components/CurriculumVitaeForm";
import curriculumVitaeValidationSchema from "./components/curriculumVitaeValidationSchema";
import CurriculumVitaeService from "./../../services/curriculumVitaeService";
import customOnSubmitUpdate from "../../utilities/customOnSubmitUpdate";

export default function CurriculumVitaeUpdateForm({ currentCurriculumVitae }) {
  const currentInitialValues = {
    id: currentCurriculumVitae.id,
    description: currentCurriculumVitae.description,
    githubLink: currentCurriculumVitae.githubLink,
    linkedinLink: currentCurriculumVitae.linkedinLink,
    photoLink: currentCurriculumVitae.photoLink,
    jobSeeker: { id: currentCurriculumVitae.jobSeeker.id },
  };

  const formik = useFormik({
    initialValues: currentInitialValues,
    validationSchema: curriculumVitaeValidationSchema,
    onSubmit: (values) => {
      console.log(values)
      customOnSubmitUpdate(
        new CurriculumVitaeService(),
        values,
        "Curriculum vitae updated successfully."
      );
    },
  });

  return (
    <CurriculumVitaeForm
      headerIconName="paperclip"
      headerContent="Update Curriculum Vitae"
      SubmitButtonIconName="save"
      SubmitButtonText="Update"
      formik={formik}
      currentCurriculumVitaeId={currentCurriculumVitae.id}
    />
  );
}
