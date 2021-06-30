import CurriculumVitaeService from "../../../services/curriculumVitaeService";
import { toast } from "react-toastify";

const curriculumVitaeOnSubmitUpdate = (
  values,
  currentCurriculumVitaeId,
  currentJobSeekerId
) => {
  let curriculumVitaeService = new CurriculumVitaeService();
  values.jobSeeker.id = currentJobSeekerId;
  values.id = currentCurriculumVitaeId;
  curriculumVitaeService
    .update(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Curriculum vitae updated successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default curriculumVitaeOnSubmitUpdate;
