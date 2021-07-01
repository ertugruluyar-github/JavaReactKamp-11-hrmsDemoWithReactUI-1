import axios from "axios";

export default class SystemEmployeeService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  get(id) {
    return axios.get(this.currenthost + "/api/systememployees/get?id=" + id);
  }

  getAll() {
    return axios.get(this.currenthost + "/api/systememployees/getall");
  }

  add(systemeEmployee) {
    return axios.post(
      this.currenthost + "/api/systememployees/add",
      JSON.stringify(systemeEmployee),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(systemeEmployee) {
    return axios.put(
      this.currenthost + "/api/systememployees/update",
      JSON.stringify(systemeEmployee),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(this.currenthost + "/api/systememployees/delete?id=" + id);
  }

}
