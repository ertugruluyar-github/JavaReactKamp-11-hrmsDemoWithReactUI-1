import { toast } from "react-toastify";

const customOnSubmit = (service, values, message) => {
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

export default customOnSubmit;
