import { toast } from "react-toastify";
import SchoolService from "./../../../../../../services/schoolService";

const schoolOnSubmitUpdate = (values, currentSchoolId, currentCurriculumVitaeId) => {
  let schoolService = new SchoolService();
  console.log("-------")
  console.log(values)
  console.log("-------")
  values.id = currentSchoolId;
  values.curriculumVitae.id = currentCurriculumVitaeId;
  //schoolService
  //  .updateSchool(values)
  //  .then(toast.success("Schools updated successfully."));
};

export default schoolOnSubmitUpdate;