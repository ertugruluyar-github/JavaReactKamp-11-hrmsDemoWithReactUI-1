import { toast } from "react-toastify";
import SchoolService from "./../../../../../../services/schoolService";

const schoolOnSubmitAdd = (values, currentCurriculumVitaeId) => {
  let schoolService = new SchoolService();
  values.currentCurriculumVitae.id = currentCurriculumVitaeId;
  schoolService
    .updateSchool(values)
    .then(toast.success("Schools saved successfully."));
};

export default schoolOnSubmitAdd;
