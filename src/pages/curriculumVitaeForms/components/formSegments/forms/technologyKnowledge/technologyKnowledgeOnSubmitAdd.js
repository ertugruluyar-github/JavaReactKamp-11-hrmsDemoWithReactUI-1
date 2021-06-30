import { toast } from "react-toastify";
import TechnologyKnowledgeService from "../../../../../../services/technologyKnowledgeService";

const technologyKnowledgeOnSubmitAdd = (values, currentCurriculumVitaeId) => {
  let technologyKnowledgeService = new TechnologyKnowledgeService();
  values.curriculumVitae.id = currentCurriculumVitaeId;
  console.log("---Added---");
  console.log(values);
  console.log("---Added---");
  technologyKnowledgeService
    .add(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Technology knowledge added successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default technologyKnowledgeOnSubmitAdd;
