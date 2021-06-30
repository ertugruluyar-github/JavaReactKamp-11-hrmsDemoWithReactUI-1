import axios from "axios";

export default class JobAdvertisementService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  get(id) {
    return axios.get(this.currenthost + "/api/jobadvertisements/get?id=" + id);
  }

  getAllActivated() {
    return axios.get(
      this.currenthost + "/api/jobadvertisements/getallactivated"
    );
  }

  getAllActivatedByJobAdvertisementId(id) {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedandJobAdvertisementid?id=" +
        id
    );
  }

  getAllActivatedOrderByApplicationDeadlineAsc() {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedorderbyapplicationdeadlineasc"
    );
  }

  getAllActivatedOrderByReleaseDateAsc() {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedorderbyreleasedateasc"
    );
  }

  getAllActivatedWithPageable(pageNumber, pageSize) {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallbyactivatedwithpageable?pageNumber=" +
        pageNumber +
        "&pageSize=" +
        pageSize
    );
  }

  getAllActivatedByWorkingPlaceTypeAndWorkingTimeTypeWithPageable(
    pageNumber,
    pageSize,
    workingPlaceTypeId,
    workingTimeTypeId
  ) {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallbyactivatedandworkingplacetypeandworkingtimetypewithpageable?pageNumber=" +
        pageNumber +
        "&pageSize=" +
        pageSize +
        "&workingPlaceTypeId=" +
        workingPlaceTypeId +
        "&workingTimeTypeId=" +
        workingTimeTypeId
    );
  }

  add(jobAdvertisement) {
    console.log(JSON.stringify(jobAdvertisement));
    return axios.post(
      this.currenthost + "/api/jobadvertisements/add",
      JSON.stringify(jobAdvertisement),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(jobAdvertisement) {
    return axios.put(
      this.currenthost + "/api/jobadvertisements/update",
      JSON.stringify(jobAdvertisement),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/jobadvertisements/delete?id=" + id
    );
  }
}
