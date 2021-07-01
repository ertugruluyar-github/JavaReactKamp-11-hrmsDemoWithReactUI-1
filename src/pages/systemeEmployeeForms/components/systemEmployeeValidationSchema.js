import * as Yup from "yup";

const systemEmployeeValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  nationalityId: Yup.string().required("Required"),
  dateOfBirth: Yup.date()
    .required("Required")
    .max(new Date(Date.now() - 86400000), "Date of birth must be in past."),
  gender: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Not a valid email."),
  password: Yup.string().required("Required"),
});

export default systemEmployeeValidationSchema;
