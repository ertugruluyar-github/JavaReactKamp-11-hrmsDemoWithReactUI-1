export const ADD_TO_JOB_ADVERTİSEMENTS_FİLTER_VALUES = "ADD_TO_JOB_ADVERTİSEMENTS_FİLTER_VALUES";

export function addToMyJobAdvertisements(filterValue) {
  return {
    type: ADD_TO_JOB_ADVERTİSEMENTS_FİLTER_VALUES,
    payload: filterValue,
  };
}