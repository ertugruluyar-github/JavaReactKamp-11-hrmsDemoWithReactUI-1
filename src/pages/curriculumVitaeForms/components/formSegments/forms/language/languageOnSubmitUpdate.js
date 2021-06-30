import { toast } from "react-toastify";
import LanguageService from "../../../../../../services/languageService";

const languageOnSubmitUpdate = (
  values,
  currentLanguageId,
  currentCurriculumVitaeId
) => {
  let languageService = new LanguageService();
  console.log("---Updated---");
  console.log(values);
  console.log("---Updated---");
  values.id = currentLanguageId;
  values.curriculumVitae.id = currentCurriculumVitaeId;
  languageService
    .update(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Language updated successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default languageOnSubmitUpdate;
