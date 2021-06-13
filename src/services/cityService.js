import axios from 'axios';

export default class CityService {
    localhost = "http://localhost:8080"
    deployhost = "https://hrmsdemobackend.herokuapp.com"
    currenthost = this.deployhost;

    getCities() {
        return axios.get(this.currenthost + "/api/cities/getall");
    }

    updateCity(city) {
        return axios.put(this.currenthost + "/api/cities/update", city)
    }

    deleteCity(id) {
        return axios.delete(this.currenthost + "/api/cities/delete?id="+ id)
    }
    
}