import axios from "axios";

export default class WorkingPlaceTypeSevice {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  get(id) {
    return axios.get(this.currenthost + "/api/workingplacetypes/get?id=" + id);
  }
  
  getAll() {
    return axios.get(this.currenthost + "/api/workingplacetypes/getall");
  }

  getAllByType(type) {
    return axios.get(
      this.currenthost + "/api/workingplacetypes/getallbytype?type=" + type
    );
  }

  add(workingPlaceType) {
    return axios.post(
      this.currenthost + "/api/workingplacetypes/add",
      workingPlaceType
    );
  }

  update(workingPlaceType) {
    return axios.put(
      this.currenthost + "/api/workingplacetypes/update",
      workingPlaceType
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/workingplacetypes/delete?id=" + id
    );
  }
}
