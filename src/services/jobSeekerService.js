import axios from 'axios';

export default class JobSeekerService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;
    
    getJobSeekers() {
        return axios.get(this.currenthost + "/api/jobseekers/getall");
    }

    addJobSeeker(jobSeeker) {
        return axios.post(this.currenthost + "/api/jobseekers/add", jobSeeker)
    }

    updateJobSeeker(jobSeeker) {
        return axios.put(this.currenthost + "/api/jobseekers/update", jobSeeker)
    }

    deleteJobSeeker(id) {
        return axios.delete(this.currenthost + "/api/jobseekers/delete?id="+ id)
    }

}