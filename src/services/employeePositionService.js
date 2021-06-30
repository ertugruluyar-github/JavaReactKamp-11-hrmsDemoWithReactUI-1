import axios from "axios";

export default class EmployeePositionService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(this.currenthost + "/api/employeepositions/getall");
  }

  add(employeeposition) {
    return axios.post(
      this.currenthost + "/api/employeepositions/add",
      JSON.stringify(employeeposition),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(employeeposition) {
    return axios.put(
      this.currenthost + "/api/employeepositions/update",
      JSON.stringify(employeeposition),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/employeepositions/delete?id=" + id
    );
  }
}
