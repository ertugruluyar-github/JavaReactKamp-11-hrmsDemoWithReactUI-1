import axios from "axios";

export default class SchoolService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(this.currenthost + "/api/schools/getall");
  }

  add(school) {
    console.log(JSON.stringify(school));
    return axios.post(
      this.currenthost + "/api/schools/add",
      JSON.stringify(school),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(school) {
    console.log(JSON.stringify(school));
    return axios.put(
      this.currenthost + "/api/schools/update",
      JSON.stringify(school),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(this.currenthost + "/api/schools/delete?id=" + id);
  }
}
