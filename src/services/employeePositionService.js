import axios from 'axios';

export default class EmployeePositionService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;
    
    getEmployeePositions() {
        return axios.get(this.currenthost + "/api/employeepositions/getall");
    }

    addEmployeePosition(employeeposition) {
        return axios.post(this.currenthost + "/api/employeepositions/add", employeeposition)
    }

    updateEmployeePosition(employeeposition) {
        return axios.put(this.currenthost + "/api/employeepositions/update", employeeposition)
    }

    deleteEmployeePosition(id) {
        return axios.delete(this.currenthost + "/api/employeepositions/delete?id="+ id)
    }

}