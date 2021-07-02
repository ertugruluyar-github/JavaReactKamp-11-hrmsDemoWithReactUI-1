import * as Yup from "yup";

const employerValidationSchema = Yup.object().shape({
  companyName: Yup.string().required("Required"),
  webSite: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Not a valid email."),
  password: Yup.string().required("Required"),
});

export default employerValidationSchema;
