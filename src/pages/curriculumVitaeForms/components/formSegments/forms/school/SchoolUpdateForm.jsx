import React from "react";
import { useFormik } from "formik";
import schoolValidationShema from "./schoolValidationSchema";
import schoolOnSubmitUpdate from "./schoolOnSubmitUpdate";
import SchoolForm from "./SchoolForm";

export default function SchoolUpdateForm({ currentSchool }) {
  let schoolUpdateFormik = useFormik({
    initialValues: currentSchool,
    validationSchema: schoolValidationShema,
    onSubmit: (values) => {
      schoolOnSubmitUpdate(
        values,
        currentSchool.id,
        currentSchool.curriculumVitae.id
      );
    },
  });

  return (
    <SchoolForm
      headerIconName="graduation"
      headerContent="Update School"
      SubmitButtonIconName="save"
      SubmitButtonText="Update"
      formik={schoolUpdateFormik}
    />
  );
}
