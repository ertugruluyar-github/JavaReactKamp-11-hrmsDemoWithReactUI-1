import axios from "axios";

export default class SystemEmployeeConfirmToEmployerService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(
      this.currenthost + "/api/systememployeeconfirmstoemployer/getall"
    );
  }

  get(id) {
    return axios.get(
      this.currenthost + "/api/systememployeeconfirmstoemployer/get?id=" + id
    );
  }

  getByEmployerId(id) {
    return axios.get(
      this.currenthost +
        "/api/systememployeeconfirmstoemployer/getbyemployerid?id=" +
        id
    );
  }
/*
  getLatestConfirmByEmployerId(id) {
    return axios.get(
      this.currenthost +
        "/api/systememployeeconfirmstoemployer/getfirstbyemployeridorderbydateofconfirmdesc?id=" +
        id
    );
  }
*/
  add(systemEmployeeConfirmToEmployer) {
    return axios.post(
      this.currenthost + "/api/systememployeeconfirmstoemployer/add",
      JSON.stringify(systemEmployeeConfirmToEmployer),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
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
      JSON.stringify(systemEmployeeConfirmToEmployer),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  confirmEmployer(employer) {
    return axios.put(
      this.currenthost +
        "/api/systememployeeconfirmstoemployer/confirmemployer",
      JSON.stringify(employer),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
