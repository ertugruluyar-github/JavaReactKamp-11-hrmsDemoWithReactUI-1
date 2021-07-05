import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import employerValidationSchema from "./components/employerValidationSchema";
import EmployerService from "../../services/employerService";
import { useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";
import employerInitialValues from "./components/employerInitialValues";
import EmployerForm from "./components/EmployerForm";
import SystemEmployeeConfirmToEmployerService from "./../../services/confirms/systemEmployeeConfirmToEmployerService";
import { toast } from "react-toastify";

export default function EmployerUpdateForm() {
  //const history = useHistory();
  const { currentEmployerId } = useParams();
  const [currentEmployer, setCurrentEmployer] = useState({});
  const [
    isConfirmConfirmBySystemEmployee,
    setIsConfirmConfirmBySystemEmployee,
  ] = useState(null);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .get(currentEmployerId)
      .then((result) => setCurrentEmployer(result.data.data));
  }, [currentEmployerId]);

  useEffect(() => {
    let systemEmployeeConfirmToEmployerService =
      new SystemEmployeeConfirmToEmployerService();
    systemEmployeeConfirmToEmployerService
      .getLatestConfirmByEmployerId(currentEmployerId)
      .then((result) =>
        result.data.data //confirm kaydı varsa
          ? setIsConfirmConfirmBySystemEmployee(result.data.data.confirm)
          : setIsConfirmConfirmBySystemEmployee(null)
      );
  }, [currentEmployerId]);

  const formik = useFormik({
    initialValues: employerInitialValues,
    validationSchema: employerValidationSchema,
    onSubmit: (values) => handleOnSubmit(values),
  });

  let handleOnSubmit = (values) => {
    let systemEmployeeConfirmToEmployerService =
      new SystemEmployeeConfirmToEmployerService();
    systemEmployeeConfirmToEmployerService
      .getLatestConfirmByEmployerId(currentEmployerId)
      .then((result) => {
        if (result.data?.data.confirm === false) {
          toast.info(
            "There is already an confirm proccess! Please wait to finished confirm proccess."
          );
        } else {
          let employerService = new EmployerService();
          currentEmployer.employerLastUpdateJsonString = JSON.stringify(values);
          employerService.update(currentEmployer).then((response) => {
            if (response.status === 200) {
              values.id = currentEmployer.id;
              systemEmployeeConfirmToEmployerService.add({ employer: values });
              //default confirm:false
              //values diyorum ama eski bilgileri alıyor, yani id ye bakıyor bir tek.
              console.log(JSON.stringify(values));
              toast.info(
                "Bilgileriniz onay sürecine girmiştir, sistemimiz bilgilerinizi onayladıktan yeni bilgilerinizi görebilirisiniz."
              );
              //history.push("/employers");
            }
          });
        }
      });
  };

  let handleView = () => {
    if (currentEmployer) {
      if (isConfirmConfirmBySystemEmployee === false) {
        return (
          <>
            <EmployerForm
              headerIconName="building"
              headerContent="Update Employer"
              submitButtonIconName="save"
              submitButtonText="Update"
              formik={formik}
              currentEmployer={currentEmployer}
            />
            <Header
              color="orange"
              content="Bilgileriniz onay sürecindedir, sistemimiz bilgilerinizi onayladıktan yeni bilgilerinizi görebilirisiniz."
              as="h3"
            />
          </>
        );
      } else {
        return (
          <EmployerForm
            headerIconName="building"
            headerContent="Update Employer"
            submitButtonIconName="save"
            submitButtonText="Update"
            formik={formik}
            currentEmployer={currentEmployer}
          />
        );
      }
    } else {
      return <Header color="orange" content="ERROR 404 NOT FOUND" as="h3" />;
    }
  };

  return handleView();
}
