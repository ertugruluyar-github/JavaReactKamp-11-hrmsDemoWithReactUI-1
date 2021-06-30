import axios from "axios";

export default class TechnologyKnowledgeService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(this.currenthost + "/api/technologyknowledges/getall");
  }

  add(technologyKnowledge) {
    return axios.post(
      this.currenthost + "/api/technologyknowledges/add",
      JSON.stringify(technologyKnowledge),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(technologyKnowledge) {
    return axios.put(
      this.currenthost + "/api/technologyknowledges/update",
      JSON.stringify(technologyKnowledge),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/technologyknowledges/delete?id=" + id
    );
  }
}
