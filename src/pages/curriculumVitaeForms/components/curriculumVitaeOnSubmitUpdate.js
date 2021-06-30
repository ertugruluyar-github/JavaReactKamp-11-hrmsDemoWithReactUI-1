import CurriculumVitaeService from "../../../services/curriculumVitaeService";
import { toast } from "react-toastify";

const curriculumVitaeOnSubmitUpdate = (values, currentCurriculumVitaeId, currentJobSeekerId) => {
  let curriculumVitaeService = new CurriculumVitaeService();
  values.jobSeeker.id = currentJobSeekerId;
  values.id = currentCurriculumVitaeId;
  curriculumVitaeService
    .updateCurriculumVitae(values)
    .then(toast.success("Curriculum vitae updated successfully."));
};

export default curriculumVitaeOnSubmitUpdate;
