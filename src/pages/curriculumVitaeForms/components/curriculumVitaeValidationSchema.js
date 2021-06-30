import * as Yup from "yup";

const curriculumVitaeValidationSchema = Yup.object().shape({
  description: Yup.string().required("Required"),
  githubLink: Yup.string(),
  linkedinLink: Yup.string(),
  photoLink: Yup.string(),
  schools: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      department: Yup.string(),
      startDate: Yup.date().required("Required"),
      endDate: Yup.date(),
      curriculumVitae: Yup.object().shape({
        id: Yup.number().required("Required"),
      }),
    })
  ),
  languages: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      degree: Yup.number()
        .required("Required")
        .min(1, "Language degree must be in [1-5].")
        .max(5, "Language degree must be in [1-5]."),
      curriculumVitae: Yup.object().shape({
        id: Yup.number().required("Required"),
      }),
    })
  ),
  workExperiences: Yup.array().of(
    Yup.object().shape({
      workPlaceName: Yup.string().required("Required"),
      positionName: Yup.string().required("Required"),
      startDate: Yup.date().required("Required"),
      endDate: Yup.date(),
      curriculumVitae: Yup.object().shape({
        id: Yup.number().required("Required"),
      }),
    })
  ),
  technologyKnowledges: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      curriculumVitae: Yup.object().shape({
        id: Yup.number().required("Required"),
      }),
    })
  ),
});

export default curriculumVitaeValidationSchema;
