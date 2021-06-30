import * as Yup from "yup";

const workExperienceValidationShema = Yup.object().shape({
  workPlaceName: Yup.string().required("Required"),
  positionName: Yup.string().required("Required"),
  startDate: Yup.date()
    .required("Required")
    .max(new Date(), "Start date must be in past or present."),
  endDate: Yup.date().max(
    new Date(),
    "End date must be in past or present. If you haven't finished work yet, you can leave it empty."
  ),
  curriculumVitae: Yup.object().shape({
    id: Yup.number().required("Required"),
  }),
});

export default workExperienceValidationShema;
