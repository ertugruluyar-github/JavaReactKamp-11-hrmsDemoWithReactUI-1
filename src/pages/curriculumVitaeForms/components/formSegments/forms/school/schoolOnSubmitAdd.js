import { toast } from "react-toastify";
import SchoolService from "./../../../../../../services/schoolService";

const schoolOnSubmitAdd = (values, currentCurriculumVitaeId) => {
  let schoolService = new SchoolService();
  values.curriculumVitae.id = currentCurriculumVitaeId;
  console.log("---Added---");
  console.log(values);
  console.log("---Added---");
  schoolService
    .add(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Schools added successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default schoolOnSubmitAdd;
