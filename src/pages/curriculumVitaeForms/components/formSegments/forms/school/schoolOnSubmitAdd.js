import { toast } from "react-toastify";
import SchoolService from "./../../../../../../services/schoolService";

const schoolOnSubmitAdd = (values, currentCurriculumVitaeId) => {
  let schoolService = new SchoolService();
  values.currentCurriculumVitae.id = currentCurriculumVitaeId;
  console.log("---Added---")
  console.log(values)
  console.log("---Added---")
  schoolService
    .updateSchool(values)
    .then(toast.success("Schools added successfully."));
};

export default schoolOnSubmitAdd;
