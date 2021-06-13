import axios from 'axios';

export default class LanguageService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getLanguages() {
        return axios.get(this.currenthost + "/api/languages/getall");
    }

    addLanguage(language) {
        return axios.post(this.currenthost + "/api/languages/add", language)
    }

    updateLanguage(language) {
        return axios.put(this.currenthost + "/api/languages/update", language)
    }

    deleteLanguage(id) {
        return axios.delete(this.currenthost + "/api/languages/delete?id="+ id)
    }

}