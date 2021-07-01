import React from "react";
import { useFormik } from "formik";
import technologyKnowledgeValidationShema from "./technologyKnowledgeValidationSchema";
import technologyKnowledgeOnSubmitUpdate from "./technologyKnowledgeOnSubmitUpdate";
import TechnologyKnowledgeForm from "./TechnologyKnowledgeForm";

export default function TechnologyKnowledgeUpdateForm({
  currentTechnologyKnowledge,
}) {
  let technologyKnowledgeUpdateFormik = useFormik({
    initialValues: currentTechnologyKnowledge,
    validationSchema: technologyKnowledgeValidationShema,
    onSubmit: (values) => {
      technologyKnowledgeOnSubmitUpdate(
        values,
        currentTechnologyKnowledge.curriculumVitae.id
      );
    },
  });

  return (
    <TechnologyKnowledgeForm
      headerIconName="thumbtack"
      headerContent="Update Technology Knowledge"
      SubmitButTonIconName="save"
      SubmitButTonText="Update"
      formik={technologyKnowledgeUpdateFormik}
    />
  );
}
