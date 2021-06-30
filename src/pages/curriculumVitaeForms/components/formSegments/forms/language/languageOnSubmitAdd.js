import { toast } from "react-toastify";
import LanguageService from "./../../../../../../services/languageService";

const languageOnSubmitAdd = (values, currentCurriculumVitaeId) => {
  let languageService = new LanguageService();
  values.curriculumVitae.id = currentCurriculumVitaeId;
  console.log("---Added---");
  console.log(values);
  console.log("---Added---");
  languageService
    .add(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Language added successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default languageOnSubmitAdd;
