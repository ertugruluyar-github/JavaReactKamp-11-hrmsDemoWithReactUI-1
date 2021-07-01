import React from "react";
import { useFormik } from "formik";
import schoolValidationShema from "./schoolValidationSchema";
import SchoolForm from "./SchoolForm";
import schoolInitialValues from "./schoolInitialValues";
import SchoolService from "./../../../../../../services/schoolService";
import customOnSubmitAdd from "../../../../../../utilities/customOnSubmitAdd";
import { useParams, useHistory } from "react-router-dom";

export default function SchoolAddForm() {
  const { currentCurriculumVitaeId } = useParams();
  const history = useHistory();

  let schoolAddFormik = useFormik({
    initialValues: schoolInitialValues,
    validationSchema: schoolValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentCurriculumVitaeId;
      console.log(values);
      customOnSubmitAdd(
        new SchoolService(),
        values,
        "School added successfully."
      );
      history.push("/curriculumvitaelist");
    },
  });

  return (
    <SchoolForm
      formKey="SchoolAddForm"
      headerIconName="graduation"
      headerContent="Add School"
      SubmitButtonIconName="save"
      SubmitButtonText="Add"
      formik={schoolAddFormik}
    />
  );
}
