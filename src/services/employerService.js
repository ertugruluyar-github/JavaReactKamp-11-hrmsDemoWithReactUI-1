import axios from "axios";

export default class EmployerService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  get(id) {
    return axios.get(this.currenthost + "/api/employers/get?id=" + id);
  }

  getAll() {
    return axios.get(this.currenthost + "/api/employers/getall");
  }

  add(employer) {
    return axios.post(
      this.currenthost + "/api/employers/add",
      JSON.stringify(employer),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(employer) {
    return axios.put(
      this.currenthost + "/api/employers/update",
      JSON.stringify(employer),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(this.currenthost + "/api/employers/delete?id=" + id);
  }
}
