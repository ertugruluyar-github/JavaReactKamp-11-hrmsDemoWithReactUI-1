import React from "react";
import { useFormik } from "formik";
import curriculumVitaeOnSubmit from "./components/curriculumVitaeOnSubmit";
import CurriculumVitaeForm from "./components/CurriculumVitaeForm";
import curriculumVitaeValidationSchema from "./components/curriculumVitaeValidationSchema";
import CurriculumVitaeService from "./../../services/curriculumVitaeService";
import customOnSubmit from "./../../utilities/customOnSubmit";

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
      customOnSubmit(
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
