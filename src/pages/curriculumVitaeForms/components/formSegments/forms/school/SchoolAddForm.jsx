import React from "react";
import { useFormik } from "formik";
import schoolValidationShema from "./schoolValidationSchema";
import schoolOnSubmitAdd from "./schoolOnSubmitAdd";
import SchoolForm from "./SchoolForm";
import schoolInitialValues from './schoolInıtialValus';

export default function SchoolAddForm({ currentCurriculumVitaeId }) {
  let schoolAddFormik = useFormik({
    initialValues: schoolInitialValues,
    validationSchema: schoolValidationShema,
    onSubmit: (values) => {
      schoolOnSubmitAdd(values, currentCurriculumVitaeId);
      console.log(values)
    },
  });

  return (
    <SchoolForm
      headerIconName="graduation"
      headerContent="Add School"
      SubmitButtonIconName="save"
      SubmitButtonText="Add"
      formik={schoolAddFormik}
    />
  );
}
