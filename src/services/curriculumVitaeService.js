import axios from "axios";

export default class CurriculumVitaeService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getCurriculumVitaes() {
    return axios.get(this.currenthost + "/api/curriculumvitaes/getall");
  }

  addCurriculumVitae(curriculumVitae) {
    return axios.post(
      this.currenthost + "/api/curriculumvitaes/add",
      JSON.stringify(curriculumVitae),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  updateCurriculumVitae(curriculumVitae) {
    return axios.put(
      this.currenthost + "/api/curriculumvitaes/update",
      JSON.stringify(curriculumVitae),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  deleteCurriculumVitae(id) {
    return axios.delete(
      this.currenthost + "/api/curriculumvitaes/delete?id=" + id
    );
  }
}
