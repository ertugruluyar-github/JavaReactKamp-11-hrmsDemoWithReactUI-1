import CurriculumVitaeService from "../../../services/curriculumVitaeService";

const curriculumVitaeOnSubmitAdd = (
  values,
  history,
  curriculumVitaeId,
  currentJobSeekerId
) => {
  let curriculumVitaeService = new CurriculumVitaeService();
  values.jobSeeker.id = currentJobSeekerId;
  values.schools?.map(
    (school) => (school.curriculumVitae.id = curriculumVitaeId)
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
  curriculumVitaeService
    .add(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("Curriculum vitae added successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
  history.push("/curriculumvitaelist");
};

export default curriculumVitaeOnSubmitAdd;
