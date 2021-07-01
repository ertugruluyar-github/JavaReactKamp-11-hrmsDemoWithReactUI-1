import React from "react";
import { useFormik } from "formik";
import curriculumVitaeOnSubmitUpdate from "./components/curriculumVitaeOnSubmitUpdate";
import CurriculumVitaeForm from "./components/CurriculumVitaeForm";
import curriculumVitaeValidationSchema from "./components/curriculumVitaeValidationSchema";

export default function CurriculumVitaeUpdateForm({ currentCurriculumVitae }) {
  const currentInitialValues = {
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
      curriculumVitaeOnSubmitUpdate(
        values,
        currentCurriculumVitae.id,
        currentCurriculumVitae.jobSeeker.id
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
