import * as Yup from "yup";

const schoolValidationShema = Yup.object().shape({
  name: Yup.string().required("Required"),
  department: Yup.string(),
  startDate: Yup.date().required("Required"),
  endDate: Yup.date(),
  curriculumVitae: Yup.object().shape({
    id: Yup.number().required("Required"),
  }),
});

export default schoolValidationShema;
