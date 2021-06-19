import { myJobAdvertisementsItems } from "./../initialValues/myJobAdvertisementsItems";
import { ADD_TO_MY_JOB_ADVERTİSEMENTS } from './../actions/myJobAdvertisementsActions';

const initialState = {
  myJobAdvertisementsItems: myJobAdvertisementsItems,
};

export default function myJobAdvertisementsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ADD_TO_MY_JOB_ADVERTİSEMENTS:
      let jobAdvertisement = state.myJobAdvertisementsItems.find(
        (m) => m.id === payload.id
      );
      if (jobAdvertisement) {
        alert("This job advertisement already exists.");
        return state;
      } else {
        return {
          ...state,
          myJobAdvertisementsItems: [
            ...state.myJobAdvertisementsItems,
            payload,
          ],
        };
      }

    default:
      return state;
  }
}
