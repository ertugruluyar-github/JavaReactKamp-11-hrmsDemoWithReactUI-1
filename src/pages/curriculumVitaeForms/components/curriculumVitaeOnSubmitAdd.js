import CurriculumVitaeService from "../../../services/curriculumVitaeService";

const curriculumVitaeOnSubmitAdd = (
  values,
  history,
  currentJobSeekerId
) => {
  let curriculumVitaeService = new CurriculumVitaeService();
  values.jobSeeker.id = currentJobSeekerId;
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
