import React from "react";
import { useFormik } from "formik";
import languageValidationShema from "./languageValidationSchema";
import languageOnSubmitUpdate from "./languageOnSubmitUpdate";
import LanguageForm from "./LanguageForm";

export default function LanguageUpdateForm({ currentLanguage }) {
  let languageUpdateFormik = useFormik({
    initialValues: currentLanguage,
    validationSchema: languageValidationShema,
    onSubmit: (values) => {
      languageOnSubmitUpdate(
        values,
        currentLanguage.id,
        currentLanguage.curriculumVitae.id
      );
    },
  });

  return (
    <LanguageForm
      headerIconName="world"
      headerContent="Update Language"
      SubmitButtonIconName="save"
      SubmitButtonText="Update"
      formik={languageUpdateFormik}
    />
  );
}
