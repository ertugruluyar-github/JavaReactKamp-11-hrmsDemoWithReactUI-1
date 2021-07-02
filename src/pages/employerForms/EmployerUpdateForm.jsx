import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import employerValidationSchema from "./components/employerValidationSchema";
import EmployerService from "../../services/employerService";
import { useHistory, useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";
import customOnSubmitUpdate from "../../utilities/customOnSubmitUpdate";
import employerInitialValues from './components/employerInitialValues';
import EmployerForm from './components/EmployerForm';

export default function EmployerUpdateForm() {
  const history = useHistory();
  const { currentEmployerId } = useParams();
  const [currentEmployer, setCurrentEmployer] = useState({});

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .get(currentEmployerId)
      .then((result) => setCurrentEmployer(result.data.data));
  }, [currentEmployerId]);

  const formik = useFormik({
    initialValues: employerInitialValues,
    validationSchema: employerValidationSchema,
    onSubmit: (values) => {
      customOnSubmitUpdate(
        new EmployerService(),
        values,
        "Employer updated successfully."
      );
      history.push("/employerlist");
    },
  });

  return currentEmployer ? (
    <EmployerForm
      headerIconName="building"
      headerContent="Update Employer"
      submitButtonIconName="save"
      submitButtonText="Update"
      formik={formik}
      currentEmployer={currentEmployer}
    />
  ) : (
    <Header color="orange" content="ERROR 404 NOT FOUND" as="h3" />
  );
}
