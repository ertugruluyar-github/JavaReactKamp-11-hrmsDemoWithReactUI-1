import axios from "axios";

export default class CurriculumVitaeService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(this.currenthost + "/api/curriculumvitaes/getall");
  }

  add(curriculumVitae) {
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

  update(curriculumVitae) {
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

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/curriculumvitaes/delete?id=" + id
    );
  }

  uploadPhoto(file, curriculumVitaeId) {
    return axios.post(
      this.currenthost +
        "/api/curriculumvitaes/uploadphoto?id=" +
        curriculumVitaeId,
      file,
      {
        headers: {
          "Content-Type": "application/json",//multipart/form-data
        },
      }
    );
  }
}
