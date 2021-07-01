import React from "react";
import { useFormik } from "formik";
import technologyKnowledgeValidationShema from "./technologyKnowledgeValidationSchema";
import TechnologyKnowledgeForm from "./TechnologyKnowledgeForm";
import customOnSubmit from "./../../../../../../utilities/customOnSubmit";
import TechnologyKnowledgeService from "./../../../../../../services/technologyKnowledgeService";

export default function TechnologyKnowledgeUpdateForm({
  currentTechnologyKnowledge,
}) {
  let technologyKnowledgeUpdateFormik = useFormik({
    initialValues: currentTechnologyKnowledge,
    validationSchema: technologyKnowledgeValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentTechnologyKnowledge.curriculumVitae.id;
      customOnSubmit(
        new TechnologyKnowledgeService(),
        values,
        "Technology knowledge updated successfully."
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
