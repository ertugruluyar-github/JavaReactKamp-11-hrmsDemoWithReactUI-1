import React from "react";
import { useFormik } from "formik";
import languageValidationShema from "./technologyKnowledgeValidationSchema";
import LanguageForm from "./TechnologyKnowledgeForm";
import languageInitialValues from "./technologyKnowledgeInitialValues";
import TechnologyKnowledgeService from "./../../../../../../services/technologyKnowledgeService";
import customOnSubmitAdd from "../../../../../../utilities/customOnSubmitAdd";
import { useParams, useHistory } from "react-router-dom";

export default function LanguageAddForm() {
  const { currentCurriculumVitaeId } = useParams();
  const history = useHistory();
  
  let languageAddFormik = useFormik({
    initialValues: languageInitialValues,
    validationSchema: languageValidationShema,
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
    <LanguageForm
      headerIconName="thumbtack"
      headerContent="Add Language"
      SubmitButtonIconName="save"
      SubmitButtonText="Add"
      formik={languageAddFormik}
    />
  );
}
