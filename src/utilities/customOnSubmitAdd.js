import { toast } from "react-toastify";

const customOnSubmitAdd = (service, values, message) => {
  service
    .add(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success(message);
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default customOnSubmitAdd;
