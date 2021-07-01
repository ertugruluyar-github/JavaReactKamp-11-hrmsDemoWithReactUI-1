import React from "react";
import { useFormik } from "formik";
import languageValidationShema from "./languageValidationSchema";
import LanguageForm from "./LanguageForm";
import LanguageService from "./../../../../../../services/languageService";
import customOnSubmitUpdate from "../../../../../../utilities/customOnSubmitUpdate";

export default function LanguageUpdateForm({ currentLanguage }) {
  let languageUpdateFormik = useFormik({
    initialValues: currentLanguage,
    validationSchema: languageValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentLanguage.curriculumVitae.id;
      customOnSubmitUpdate(
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
      submitButtonIconName="save"
      submitButtonText="Update"
      formik={languageUpdateFormik}
    />
  );
}
