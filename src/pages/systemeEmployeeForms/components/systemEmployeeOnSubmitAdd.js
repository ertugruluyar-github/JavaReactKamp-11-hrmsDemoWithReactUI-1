import SystemEmployeeService from "../../../services/systemmployeeService";

const systemEmployeeOnSubmitAdd = (values, history) => {
  let systemEmployeeService = new SystemEmployeeService();
  console.log(values);
  systemEmployeeService
    .add(values)
    .then((response) => {
      if (response.status === 200) {
        toast.success("System employee added successfully.");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
  history.push("/systememployeelist");
};

export default systemEmployeeOnSubmitAdd;
