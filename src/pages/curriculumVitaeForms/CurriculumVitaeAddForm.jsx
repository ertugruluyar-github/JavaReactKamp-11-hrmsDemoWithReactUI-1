import React from "react";
import { useFormik } from "formik";
import curriculumVitaeOnSubmitAdd from "./components/curriculumVitaeOnSubmitAdd";
import curriculumVitaeValidationSchema from "./components/curriculumVitaeValidationSchema";
import CurriculumVitaeForm from "./components/CurriculumVitaeForm";
import curriculumAddVitaeInitialValues from "./components/curriculumAddVitaeInitialValues";
import { useHistory } from 'react-router-dom';

export default function CurriculumVitaeAddForm({ currentCurriculumVitae }) {
  let history = useHistory();
  const formik = useFormik({
    initialValues: curriculumAddVitaeInitialValues,
    validationSchema: curriculumVitaeValidationSchema,
    onSubmit: (values) => {
      curriculumVitaeOnSubmitAdd(values, history, currentCurriculumVitae.id);
    },
  });
  return (
    <CurriculumVitaeForm
      headerIconName="paperclip"
      headerContent="Add Curriculum Vitae"
      SubmitButtonIconName="save"
      SubmitButtonText="Add"
      formik={formik}
    />
  );
}
