import React from "react";
import { useFormik } from "formik";
import curriculumVitaeValidationSchema from "./components/curriculumVitaeValidationSchema";
import CurriculumVitaeForm from "./components/CurriculumVitaeForm";
import curriculumVitaeInitialValues from "./components/curriculumVitaeInitialValues";
import { useHistory } from "react-router-dom";
import CurriculumVitaeService from "./../../services/curriculumVitaeService";
import customOnSubmitAdd from '../../utilities/customOnSubmitAdd';

export default function CurriculumVitaeAddForm() {
  const { currentJobSeekerId } = useParams();
  const history = useHistory();

  const formik = useFormik({
    initialValues: curriculumVitaeInitialValues,
    validationSchema: curriculumVitaeValidationSchema,
    onSubmit: (values) => {
      values.jobSeeker.id = currentJobSeekerId;
      customOnSubmitAdd(
        new CurriculumVitaeService(),
        values,
        "Curriculum vitae added successfully."
      );
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
