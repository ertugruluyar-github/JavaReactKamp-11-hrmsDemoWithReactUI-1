import React from "react";
import { useFormik } from "formik";
import languageValidationShema from "./languageValidationSchema";
import LanguageForm from "./LanguageForm";
import LanguageService from "./../../../../../../services/languageService";
import customOnSubmit from "./../../../../../../utilities/customOnSubmit";

export default function LanguageUpdateForm({ currentLanguage }) {
  let languageUpdateFormik = useFormik({
    initialValues: currentLanguage,
    validationSchema: languageValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentLanguage.curriculumVitae.id;
      customOnSubmit(
        new LanguageService(),
        values,
        "Language updated successfully."
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
