import * as Yup from "yup";

const schoolValidationShema = Yup.object().shape({
  name: Yup.string().required("Required"),
  department: Yup.string(),
  startDate: Yup.date()
    .required("Required")
    .max(new Date(), "Start date must be in past or present."),
  endDate: Yup.date().max(
    new Date(),
    "End date must be in past or present. If you haven't finished school yet, you can leave it empty."
  ),
  curriculumVitae: Yup.object().shape({
    id: Yup.number().required("Required"),
  }),
});

export default schoolValidationShema;
