import React from "react";
import { useFormik } from "formik";
import languageValidationShema from "./languageValidationSchema";
import LanguageForm from "./LanguageForm";
import languageInitialValues from "./languageInitialValues";
import LanguageService from "./../../../../../../services/languageService";
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
        new LanguageService(),
        values,
        "Language added successfully."
      );
      history.push("/curriculumvitaelist");
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
