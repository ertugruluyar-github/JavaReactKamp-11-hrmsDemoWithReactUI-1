import axios from "axios";

export default class JobSeekerService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  get(id) {
    return axios.get(this.currenthost + "/api/jobseekers/get?id=" + id);
  }

  getAll() {
    return axios.get(this.currenthost + "/api/jobseekers/getall");
  }

  add(jobSeeker) {
    return axios.post(
      this.currenthost + "/api/jobseekers/add",
      JSON.stringify(jobSeeker),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(jobSeeker) {
    return axios.put(
      this.currenthost + "/api/jobseekers/update",
      JSON.stringify(jobSeeker),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(this.currenthost + "/api/jobseekers/delete?id=" + id);
  }

  likeJobAdvertisement(jobAdvertisementId, jobSeekerId) {
    return axios.put(
      this.currenthost +
        "/api/jobseekers/likejobadvertisement?jobAdvertisementId=" +
        jobAdvertisementId +
        "&jobSeekerId=" +
        jobSeekerId
    );
  }

  dislikeJobAdvertisement(jobAdvertisementId, jobSeekerId) {
    return axios.put(
      this.currenthost +
        "/api/jobseekers/dislikejobadvertisement?jobAdvertisementId=" +
        jobAdvertisementId +
        "&jobSeekerId=" +
        jobSeekerId
    );
  }
}
