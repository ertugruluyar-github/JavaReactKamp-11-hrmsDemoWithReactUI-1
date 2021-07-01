import React from "react";
import { useFormik } from "formik";
import technologyKnowledgeValidationShema from "./technologyKnowledgeValidationSchema";
import TechnologyKnowledgeForm from "./TechnologyKnowledgeForm";
import customOnSubmitUpdate from "../../../../../../utilities/customOnSubmitUpdate";
import TechnologyKnowledgeService from "./../../../../../../services/technologyKnowledgeService";

export default function TechnologyKnowledgeUpdateForm({
  currentTechnologyKnowledge,
}) {
  let technologyKnowledgeUpdateFormik = useFormik({
    initialValues: currentTechnologyKnowledge,
    validationSchema: technologyKnowledgeValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentTechnologyKnowledge.curriculumVitae.id;
      customOnSubmitUpdate(
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
      submitButtonIconName="save"
      submitButTonText="Update"
      formik={technologyKnowledgeUpdateFormik}
    />
  );
}
