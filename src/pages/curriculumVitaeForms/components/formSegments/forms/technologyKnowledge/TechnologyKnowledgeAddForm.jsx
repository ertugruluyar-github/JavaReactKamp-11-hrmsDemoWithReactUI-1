import React from "react";
import { useFormik } from "formik";
import technologyKnowledgeValidationShema from "./technologyKnowledgeValidationSchema";
import TechnologyKnowledgeForm from "./TechnologyKnowledgeForm";
import technologyKnowledgeInitialValues from "./technologyKnowledgeInitialValues";
import TechnologyKnowledgeService from "./../../../../../../services/technologyKnowledgeService";
import customOnSubmitAdd from "../../../../../../utilities/customOnSubmitAdd";
import { useParams, useHistory } from "react-router-dom";

export default function TechnologyKnowledgeAddForm() {
  const { currentCurriculumVitaeId } = useParams();
  const history = useHistory();
  
  let technologyKnowledgeAddFormik = useFormik({
    initialValues: technologyKnowledgeInitialValues,
    validationSchema: technologyKnowledgeValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentCurriculumVitaeId;
      console.log(values);
      customOnSubmitAdd(
        new TechnologyKnowledgeService(),
        values,
        "Technology knowledge added successfully."
      );
      history.push("/curriculumvitaelist");
    },
  });

  return (
    <TechnologyKnowledgeForm
      headerIconName="thumbtack"
      headerContent="Add Technology Knowledge"
      submitButtonIconName="save"
      submitButtonText="Add"
      formik={technologyKnowledgeAddFormik}
    />
  );
}
