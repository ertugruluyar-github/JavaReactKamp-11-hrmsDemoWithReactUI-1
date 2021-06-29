import CurriculumVitaeService from "../../../services/curriculumVitaeService";
import { toast } from "react-toastify";

const curriculumVitaeOnSubmitUpdate = (
  values,
  history,
  currentCurriculumVitaeId,
  currentJobSeekerId
) => {
  let curriculumVitaeService = new CurriculumVitaeService();
  values.jobSeeker.id = currentJobSeekerId;
  values.schools?.map(
    (school) => (school.curriculumVitae.id = currentCurriculumVitaeId)
  );
  values.languages?.map(
    (language) => (language.curriculumVitae.id = currentCurriculumVitaeId)
  );
  values.workExperiences?.map(
    (workExperience) =>
      (workExperience.curriculumVitae.id = currentCurriculumVitaeId)
  );
  values.technologyKnowledges?.map(
    (technologyKnowledge) =>
      (technologyKnowledge.curriculumVitae.id = currentCurriculumVitaeId)
  );
  console.log(values);
  curriculumVitaeService.updateCurriculumVitae(values).then((response) => {
    if (response.status === 200) {
      toast.success("Curriculum vitae updated successfully.");
    }
  });
  history.push("/curriculumvitaelist");
};

export default curriculumVitaeOnSubmitUpdate;
