import * as Yup from "yup";

const languageValidationShema = Yup.object().shape({
  name: Yup.string().required("Required"),
  degree: Yup.number()
    .required("Required")
    .min(1, "Language degree must be in [1-5]")
    .max(5, "Language degree must be in [1-5]"),
  curriculumVitae: Yup.object().shape({
    id: Yup.number().required("Required"),
  }),
});

export default languageValidationShema;
