import CurriculumVitaeService from "../../../services/curriculumVitaeService";
import { toast } from "react-toastify";

const curriculumVitaeOnSubmit = (service, values, message) => {
  let curriculumVitaeService = new CurriculumVitaeService();
  curriculumVitaeService
    .update(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success(message);
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default curriculumVitaeOnSubmit;
