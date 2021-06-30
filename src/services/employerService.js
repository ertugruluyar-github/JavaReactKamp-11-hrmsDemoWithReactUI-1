import axios from 'axios';

export default class EmployerService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getAll() {
        return axios.get(this.currenthost + "/api/employers/getall");
    }

    add(employer) {
        return axios.post(this.currenthost + "/api/employers/add", employer)
    }

    update(employer) {
        return axios.put(this.currenthost + "/api/employers/update", employer)
    }

    delete(id) {
        return axios.delete(this.currenthost + "/api/employers/delete?id="+ id)
    }

}