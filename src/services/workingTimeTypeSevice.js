import axios from "axios";

export default class WorkingTimeTypeSevice {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  get(id) {
    return axios.get(this.currenthost + "/api/workingtimetypes/get?id=" + id);
  }

  getAll() {
    return axios.get(this.currenthost + "/api/workingtimetypes/getall");
  }

  getAllByType(type) {
    return axios.get(
      this.currenthost + "/api/workingtimetypes/getallbytype?type=" + type
    );
  }

  add(workingTimeType) {
    return axios.post(
      this.currenthost + "/api/workingtimetypes/add",
      JSON.stringify(workingTimeType),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(workingTimeType) {
    return axios.put(
      this.currenthost + "/api/workingtimetypes/update",
      JSON.stringify(workingTimeType),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/workingtimetypes/delete?id=" + id
    );
  }
}
