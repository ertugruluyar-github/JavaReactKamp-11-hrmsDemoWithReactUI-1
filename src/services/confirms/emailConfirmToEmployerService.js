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

  add(emailConfirmToEmployer) {
    return axios.post(
      this.currenthost + "/api/emailconfirmstoemployer/add",
      JSON.stringify(emailConfirmToEmployer),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
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
      JSON.stringify(emailConfirmToEmployer),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  confirmEmployer(employer) {
    return axios.put(
      this.currenthost + "/api/emailconfirmstoemployer/confirmemployer",
      JSON.stringify(employer),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
