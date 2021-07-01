import React from "react";
import { useFormik } from "formik";
import schoolValidationShema from "./schoolValidationSchema";
import SchoolForm from "./SchoolForm";
import SchoolService from "./../../../../../../services/schoolService";
import customOnSubmitUpdate from "../../../../../../utilities/customOnSubmitUpdate";

export default function SchoolUpdateForm({ currentSchool }) {
  let schoolUpdateFormik = useFormik({
    initialValues: currentSchool,
    validationSchema: schoolValidationShema,
    onSubmit: (values) => {
      values.curriculumVitae.id = currentSchool.curriculumVitae.id;
      customOnSubmitUpdate(
        new SchoolService(),
        values,
        "School updated successfully."
      );
    },
  });

  return (
    <SchoolForm
      formKey="SchoolUpdateForm"
      headerIconName="graduation"
      headerContent="Update School"
      submitButtonIconName="save"
      submitButtonText="Update"
      formik={schoolUpdateFormik}
    />
  );
}
