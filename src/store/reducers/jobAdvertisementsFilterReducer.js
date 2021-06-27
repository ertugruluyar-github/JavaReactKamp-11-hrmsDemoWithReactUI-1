import { jobAdvertisementsFilterValues } from './../initialValues/jobAdvertisementsFilterValues';

const initialState = {
    jobAdvertisementsFilterValues: jobAdvertisementsFilterValues,
  };

export default function jobAdvertisementsFilterReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_TO_JOB_ADVERTİSEMENTS_FİLTER_VALUES:
            
            break;
    
        default:
            break;
    }
}