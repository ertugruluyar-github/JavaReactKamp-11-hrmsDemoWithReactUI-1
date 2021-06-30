import axios from 'axios';

export default class LanguageService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getAll() {
        return axios.get(this.currenthost + "/api/languages/getall");
    }

    add(language) {
        return axios.post(this.currenthost + "/api/languages/add", language)
    }

    update(language) {
        return axios.put(this.currenthost + "/api/languages/update", language)
    }

    delete(id) {
        return axios.delete(this.currenthost + "/api/languages/delete?id="+ id)
    }

}