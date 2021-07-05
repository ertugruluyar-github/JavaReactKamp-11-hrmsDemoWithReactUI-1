import axios from "axios";

export default class EmailConfirmToJobSeekerService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(this.currenthost + "/api/emailconfirmstojobseeker/getall");
  }

  get(id) {
    return axios.get(
      this.currenthost + "/api/emailconfirmstojobseeker/get?id=" + id
    );
  }

  getAllByJobSeekerId(id) {
    return axios.get(
      this.currenthost +
        "/api/emailconfirmstojobseeker/getallbyjobseekerid?id=" +
        id
    );
  }

  getLatestConfirmByJobSeekerId(id) {
    return axios.get(
      this.currenthost +
        "/api/emailconfirmstojobseeker/getfirstbyjobseekeridorderbydateofconfirmdesc?id=" +
        id
    );
  }

  add(emailConfirmToJobSeeker) {
    return axios.post(
      this.currenthost + "/api/emailconfirmstojobseeker/add",
      JSON.stringify(emailConfirmToJobSeeker),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/emailconfirmstojobseeker/delete?id=" + id
    );
  }

  update(emailConfirmToJobSeeker) {
    return axios.put(
      this.currenthost + "/api/emailconfirmstojobseeker/update",
      JSON.stringify(emailConfirmToJobSeeker),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  confirmJobSeeker(jobSeeker) {
    return axios.put(
      this.currenthost + "/api/emailconfirmstojobseeker/confirmjobseeker",
      JSON.stringify(jobSeeker),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
