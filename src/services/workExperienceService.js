import axios from 'axios';

export default class WorkExperienceService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;
    
    getWorkExperiences() {
        return axios.get(this.currenthost + "/api/workexperiences/getall");
    }

    addWorkExperience(workExperience) {
        return axios.post(this.currenthost + "/api/workexperiences/add", workExperience)
    }

    updateWorkExperience(workExperience) {
        return axios.put(this.currenthost + "/api/workexperiences/update", workExperience)
    }

    deleteWorkExperience(id) {
        return axios.delete(this.currenthost + "/api/workexperiences/delete?id="+ id)
    }

}