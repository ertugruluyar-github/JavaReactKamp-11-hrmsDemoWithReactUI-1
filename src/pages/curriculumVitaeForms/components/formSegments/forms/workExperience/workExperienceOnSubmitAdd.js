import { toast } from "react-toastify";
import WorkExperienceService from "./../../../../../../services/workExperienceService";

const workExperienceOnSubmitAdd = (values, currentCurriculumVitaeId) => {
  let workExperienceService = new WorkExperienceService();
  values.curriculumVitae.id = currentCurriculumVitaeId;
  console.log("---Added---");
  console.log(values);
  console.log("---Added---");
  workExperienceService
    .add(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Work experience added successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default workExperienceOnSubmitAdd;
