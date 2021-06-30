import React from "react";
import { useFormik } from "formik";
import languageValidationShema from "./languageValidationSchema";
import languageOnSubmitAdd from "./languageOnSubmitAdd";
import LanguageForm from "./LanguageForm";
import languageInitialValues from './languageInitialValues';

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
      headerIconName="world"
      headerContent="Add Language"
      SubmitButtonIconName="save"
      SubmitButtonText="Add"
      formik={languageAddFormik}
    />
  );
}
