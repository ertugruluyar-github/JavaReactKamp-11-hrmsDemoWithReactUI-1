import { toast } from "react-toastify";
import WorkExperienceService from "./../../../../../../services/workExperienceService";

const workExperienceOnSubmitUpdate = (
  values,
  currentWorkExperienceId,
  currentCurriculumVitaeId
) => {
  let workExperienceService = new WorkExperienceService();
  console.log("---Updated---");
  console.log(values);
  console.log("---Updated---");
  values.id = currentWorkExperienceId;
  values.curriculumVitae.id = currentCurriculumVitaeId;
  workExperienceService
    .update(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Work experience updated successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default workExperienceOnSubmitUpdate;
