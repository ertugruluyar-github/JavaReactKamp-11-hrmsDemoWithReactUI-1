export const ADD_TO_MY_JOB_ADVERTİSEMENTS = "ADD_TO_MY_JOB_ADVERTİSEMENTS";

export function addToMyJobAdvertisements(jobAdvertisement) {
  return {
    type: ADD_TO_MY_JOB_ADVERTİSEMENTS,
    payload: jobAdvertisement,
  };
}
