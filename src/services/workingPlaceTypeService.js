import axios from "axios"

export default class WorkingPlaceTypeSevice {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getWorkingPlaceTypes() {
        return axios.get(this.currenthost + "/api/workingplacetypes/getall");
    }

    getWorkingPlaceType(id) {
        return axios.get(this.currenthost + "/api/workingplacetypes/get?id=" + id);
    }

    getWorkingPlaceTypesByType(type) {
        return axios.get(this.currenthost + "/api/workingplacetypes/getallbytype?type=" + type);
    }

    addWorkingPlaceType(workingPlaceType) {
        return axios.post(this.currenthost + "/api/workingplacetypes/add", workingPlaceType)
    }

    updateWorkingPlaceType(workingPlaceType) {
        return axios.put(this.currenthost + "/api/workingplacetypes/update", workingPlaceType)
    }

    deleteWorkingPlaceType(id) {
        return axios.delete(this.currenthost + "/api/workingplacetypes/delete?id="+ id)
    }

}