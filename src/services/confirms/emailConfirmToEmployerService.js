import axios from "axios";

export default class EmailConfirmToEmployerService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(this.currenthost + "/api/emailconfirmstoemployer/getall");
  }

  get(id) {
    return axios.get(
      this.currenthost + "/api/emailconfirmstoemployer/get?id=" + id
    );
  }

  getAllByEmployerId(id) {
    return axios.get(
      this.currenthost +
        "/api/emailconfirmstoemployer/getallbyemployerid?id=" +
        id
    );
  }

  getLatestConfirmByEmployerId(id) {
    return axios.get(
      this.currenthost +
        "/api/emailconfirmstoemployer/getfirstbyemployeridorderbydateofconfirmdesc?id=" +
        id
    );
  }

  add(emailConfirmToToEmployer) {
    return axios.post(
      this.currenthost + "/api/emailconfirmstoemployer/add",
      emailConfirmToToEmployer
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/emailconfirmstoemployer/delete?id=" + id
    );
  }

  update(emailConfirmToEmployer) {
    return axios.put(
      this.currenthost + "/api/emailconfirmstoemployer/update",
      emailConfirmToEmployer
    );
  }

  confirmEmployer(employer) {
    return axios.put(
      this.currenthost + "/api/emailconfirmstoemployer/confirmemployer",
      employer
    );
  }
}
