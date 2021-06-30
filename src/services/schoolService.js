import axios from 'axios';

export default class SchoolService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getAll() {
        return axios.get(this.currenthost + "/api/schools/getall");
    }

    add(school) {
        return axios.post(this.currenthost + "/api/schools/add", school)
    }

    update(school) {
        return axios.put(this.currenthost + "/api/schools/update", school)
    }

    delete(id) {
        return axios.delete(this.currenthost + "/api/schools/delete?id="+ id)
    }

}