import axios from 'axios';

export default class SchoolService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getSchools() {
        return axios.get(this.currenthost + "/api/schools/getall");
    }

    addSchool(school) {
        return axios.post(this.currenthost + "/api/schools/add", school)
    }

    updateSchool(school) {
        return axios.put(this.currenthost + "/api/schools/update", school)
    }

    deleteSchool(id) {
        return axios.delete(this.currenthost + "/api/schools/delete?id="+ id)
    }

}