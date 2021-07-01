import React from "react";
import { useFormik } from "formik";
import curriculumVitaeOnSubmitAdd from "./components/curriculumVitaeOnSubmitAdd";
import curriculumVitaeValidationSchema from "./components/curriculumVitaeValidationSchema";
import CurriculumVitaeForm from "./components/CurriculumVitaeForm";
import curriculumVitaeInitialValues from "./components/curriculumVitaeInitialValues";
import { useHistory } from "react-router-dom";

export default function CurriculumVitaeAddForm() {
  const { currentJobSeekerId } = useParams();
  const history = useHistory();
  const formik = useFormik({
    initialValues: curriculumVitaeInitialValues,
    validationSchema: curriculumVitaeValidationSchema,
    onSubmit: (values) => {
      curriculumVitaeOnSubmitAdd(values, history, currentJobSeekerId);
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
