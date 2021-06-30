import React from "react";
import { useFormik } from "formik";
import languageValidationShema from "./technologyKnowledgeValidationSchema";
import languageOnSubmitAdd from "./technologyKnowledgeOnSubmitAdd";
import LanguageForm from "./TechnologyKnowledgeForm";
import languageInitialValues from './technologyKnowledgeInitialValues';

export default function LanguageAddForm({ currentCurriculumVitaeId }) {
  let languageAddFormik = useFormik({
    initialValues: languageInitialValues,
    validationSchema: languageValidationShema,
    onSubmit: (values) => {
      console.log(values)
      languageOnSubmitAdd(values, currentCurriculumVitaeId);
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
