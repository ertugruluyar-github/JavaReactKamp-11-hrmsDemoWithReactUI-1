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
  const [isConfirmBySystemEmployee, setIsConfirmBySystemEmployee] =
    useState(null);

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
      .getByEmployerId(currentEmployerId)
      .then((result) =>
        result.data.data //confirm kaydı varsa
          ? setIsConfirmBySystemEmployee(result.data.data.confirmStatus)
          : setIsConfirmBySystemEmployee(null)
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
      .getByEmployerId(currentEmployerId)
      .then((result) => {
        if (result.data?.data.confirmStatus === false) {
          toast.info(
            "There is already an confirm proccess! Please wait to finished confirm proccess."
          );
        } else {
          let employerService = new EmployerService();
          let currentSystemEmployeeConfirmToEmployerId = result.data.data.id;
          currentEmployer.employerLastUpdateJsonString = JSON.stringify(values);
          currentEmployer.onUpdateProcessStatus = true;
          currentEmployer.confirmStatus = false;
          employerService.update(currentEmployer).then((response) => {
            if (response.status === 200) {
              values.id = currentEmployer.id;
              systemEmployeeConfirmToEmployerService
                .update({
                  id: currentSystemEmployeeConfirmToEmployerId,
                  employer: values,
                })
                .then((response) => {
                  if (response.status === 200) {
                    toast.info(
                      "Bilgileriniz onay sürecine girmiştir, sistemimiz bilgilerinizi onayladıktan yeni bilgilerinizi görebilirisiniz."
                    );
                    //history.push("/employers");
                  }
                });
              //default confirmStatus:false
              //values diyorum ama eski bilgileri alıyor, yani id ye bakıyor bir tek.
              console.log(JSON.stringify(values));
            }
          });
        }
      });
  };

  let handleShowOnUpdateProcessInfo = () => {
    if (isConfirmBySystemEmployee === false) {
      return (
        <Header
          color="orange"
          content="Bilgileriniz onay sürecindedir, sistemimiz bilgilerinizi onayladıktan yeni bilgilerinizi görebilirisiniz."
          as="h3"
        />
      );
    }
  };

  let handleView = () => {
    if (currentEmployer) {
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
          {handleShowOnUpdateProcessInfo()}
        </>
      );
    } else {
      return <Header color="orange" content="ERROR 404 NOT FOUND" as="h3" />;
    }
  };

  return handleView();
}
