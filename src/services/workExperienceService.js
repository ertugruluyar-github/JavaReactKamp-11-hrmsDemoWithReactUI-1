import axios from 'axios';

export default class WorkExperienceService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;
    
    getAll() {
        return axios.get(this.currenthost + "/api/workexperiences/getall");
    }

    add(workExperience) {
        return axios.post(this.currenthost + "/api/workexperiences/add", workExperience)
    }

    update(workExperience) {
        return axios.put(this.currenthost + "/api/workexperiences/update", workExperience)
    }

    delete(id) {
        return axios.delete(this.currenthost + "/api/workexperiences/delete?id="+ id)
    }

}