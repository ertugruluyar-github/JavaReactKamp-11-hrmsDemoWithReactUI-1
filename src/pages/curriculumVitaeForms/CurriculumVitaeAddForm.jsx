import React from "react";
import { useFormik } from "formik";
import curriculumVitaeOnSubmit from "./components/curriculumVitaeOnSubmit";
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
      values.jobSeeker.id = currentJobSeekerId;
      curriculumVitaeOnSubmit(values, "Curriculum vitae added successfully.");
      history.push("/curriculumvitaelist");
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
