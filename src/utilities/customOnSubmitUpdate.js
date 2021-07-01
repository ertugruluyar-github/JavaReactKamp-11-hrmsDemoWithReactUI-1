import { toast } from "react-toastify";

const customOnSubmitUpdate= (service, values, message) => {
  service
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

export default customOnSubmitUpdate;