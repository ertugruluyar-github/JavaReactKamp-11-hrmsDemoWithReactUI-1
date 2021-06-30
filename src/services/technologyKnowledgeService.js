import axios from 'axios';

export default class TechnologyKnowledgeService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;
    
    getAll() {
        return axios.get(this.currenthost + "/api/technologyknowledges/getall");
    }

    add(technologyKnowledge) {
        return axios.post(this.currenthost + "/api/technologyknowledges/add", technologyKnowledge)
    }

    update(technologyKnowledge) {
        return axios.put(this.currenthost + "/api/technologyknowledges/update", technologyKnowledge)
    }

    delete(id) {
        return axios.delete(this.currenthost + "/api/technologyknowledges/delete?id="+ id)
    }

}