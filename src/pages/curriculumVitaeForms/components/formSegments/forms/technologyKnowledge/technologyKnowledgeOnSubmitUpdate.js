import { toast } from "react-toastify";
import TechnologyKnowledgeService from "../../../../../../services/technologyKnowledgeService";

const technologyKnowledgeOnSubmitUpdate = (
  values,
  currentTechnologyKnowledgeId,
  currentCurriculumVitaeId
) => {
  let technologyKnowledgeService = new TechnologyKnowledgeService();
  console.log("---Updated---");
  console.log(values);
  console.log("---Updated---");
  values.id = currentTechnologyKnowledgeId;
  values.curriculumVitae.id = currentCurriculumVitaeId;
  technologyKnowledgeService
    .update(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Technology knowledge updated successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default technologyKnowledgeOnSubmitUpdate;
