import axios from 'axios';

export default class TechnologyKnowledgeService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;
    
    getTechnologyKnowledges() {
        return axios.get(this.currenthost + "/api/technologyknowledges/getall");
    }

    addTechnologyKnowledge(technologyKnowledge) {
        return axios.post(this.currenthost + "/api/technologyknowledges/add", technologyKnowledge)
    }

    updateTechnologyKnowledge(technologyKnowledge) {
        return axios.put(this.currenthost + "/api/technologyknowledges/update", technologyKnowledge)
    }

    deleteTechnologyKnowledge(id) {
        return axios.delete(this.currenthost + "/api/technologyknowledges/delete?id="+ id)
    }

}