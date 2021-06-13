import axios from "axios";

export default class JobAdvertisementService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getActivatedJobAdvertisements() {
    return axios.get(
      this.currenthost + "/api/jobadvertisements/getallactivated"
    );
  }

  getActivatedJobAdvertisementsByJobAdvertisementId(id) {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedandJobAdvertisementid?id=" +
        id
    );
  }

  getActivatedJobAdvertisementsOrderByApplicationDeadlineAsc() {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedorderbyapplicationdeadlineasc"
    );
  }

  getActivatedJobAdvertisementsOrderByReleaseDateAsc() {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedorderbyreleasedateasc"
    );
  }

  addJobAdvertisement(jobAdvertisement) {
    return axios.post(this.currenthost + "/api/jobadvertisements/add", jobAdvertisement);
  }

  updateJobAdvertisement(jobAdvertisement) {
    return axios.put(this.currenthost + "/api/jobadvertisements/update", jobAdvertisement);
  }

  deleteJobAdvertisement(id) {
    return axios.delete(this.currenthost + "/api/jobadvertisements/delete?id=" + id);
  }
}
