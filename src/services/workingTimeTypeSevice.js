import axios from "axios"

export default class WorkingTimeTypeSevice {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getWorkingTimeTypes() {
        return axios.get(this.currenthost + "/api/workingtimetypes/getall");
    }

    getWorkingTimeType(id) {
        return axios.get(this.currenthost + "/api/workingtimetypes/get?id=" + id);
    }

    getWorkingTimeTypesByType(type) {
        return axios.get(this.currenthost + "/api/workingtimetypes/getallbytype?type=" + type);
    }

    addWorkingTimeType(workingTimeType) {
        return axios.post(this.currenthost + "/api/workingtimetypes/add", workingTimeType)
    }

    updateWorkingTimeType(workingTimeType) {
        return axios.put(this.currenthost + "/api/workingtimetypes/update", workingTimeType)
    }

    deleteWorkingTimeType(id) {
        return axios.delete(this.currenthost + "/api/workingtimetypes/delete?id="+ id)
    }

}