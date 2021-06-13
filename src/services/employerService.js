import axios from 'axios';

export default class EmployerService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getEmployers() {
        return axios.get(this.currenthost + "/api/employers/getall");
    }

    addEmployer(employer) {
        return axios.post(this.currenthost + "/api/employers/add", employer)
    }

    updatEemployer(employer) {
        return axios.put(this.currenthost + "/api/employers/update", employer)
    }

    deleteEmployer(id) {
        return axios.delete(this.currenthost + "/api/employers/delete?id="+ id)
    }

}