import * as Yup from "yup";

const technologyKnowledgeValidationShema = Yup.object().shape({
  name: Yup.string().required("Required"),
  curriculumVitae: Yup.object().shape({
    id: Yup.number().required("Required"),
  }),
});

export default technologyKnowledgeValidationShema;
