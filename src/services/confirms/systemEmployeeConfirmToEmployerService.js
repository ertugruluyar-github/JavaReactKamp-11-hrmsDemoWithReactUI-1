import axios from "axios";

export default class SystemEmployeeConfirmToEmployerService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(this.currenthost + "/api/systememployeeconfirmstoemployer/getall");
  }

  get(id) {
    return axios.get(
      this.currenthost + "/api/systememployeeconfirmstoemployer/get?id=" + id
    );
  }

  getAllByEmployerId(id) {
    return axios.get(
      this.currenthost +
        "/api/systememployeeconfirmstoemployer/getallbyemployerid?id=" +
        id
    );
  }

  getLatestConfirmByEmployerId(id) {
    return axios.get(
      this.currenthost +
        "/api/systememployeeconfirmstoemployer/getfirstbyemployeridorderbydateofconfirmdesc?id=" +
        id
    );
  }

  add(systemEmployeeConfirmToEmployer) {
    return axios.post(
      this.currenthost + "/api/systememployeeconfirmstoemployer/add",
      systemEmployeeConfirmToEmployer
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/systememployeeconfirmstoemployer/delete?id=" + id
    );
  }

  update(systemEmployeeConfirmToEmployer) {
    return axios.put(
      this.currenthost + "/api/systememployeeconfirmstoemployer/update",
      systemEmployeeConfirmToEmployer
    );
  }

  confirmEmployer(employer) {
    return axios.put(
      this.currenthost + "/api/systememployeeconfirmstoemployer/confirmemployer",
      employer
    );
  }
}
