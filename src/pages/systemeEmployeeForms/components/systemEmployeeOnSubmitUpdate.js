import SystemEmployeeService from "../../../services/systemEmployeeService";
import { toast } from "react-toastify";

const systemEmployeeOnSubmitUpdate = (values, currentSystemEmployeeId) => {
  let systemEmployeeService = new SystemEmployeeService();
  values.id = currentSystemEmployeeId;
  systemEmployeeService
    .update(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("System employee updated successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

export default systemEmployeeOnSubmitUpdate;
