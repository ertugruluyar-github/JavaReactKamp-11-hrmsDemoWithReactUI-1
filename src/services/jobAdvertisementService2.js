import axios from "axios";

export default class JobAdvertisementService2 {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAllActivated() {
    return axios.get(
      this.currenthost + "/api/jobadvertisements/getallactivated"
    );
  }

  getAllActivatedByJobAdvertisementId(id) {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedandJobAdvertisementid?id=" +
        id
    );
  }

  getAllActivatedOrderByApplicationDeadlineAsc() {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedorderbyapplicationdeadlineasc"
    );
  }

  getAllActivatedOrderByReleaseDateAsc() {
    return axios.get(
      this.currenthost +
        "/api/jobadvertisements/getallactivatedorderbyreleasedateasc"
    );
  }

  add(jobAdvertisement) {
    console.log(jobAdvertisement);
    console.log(
      JSON.stringify({
        description: jobAdvertisement.description,
        minSalary: jobAdvertisement.minSalary,
        maxSalary: jobAdvertisement.maxSalary,
        numberOfOpenPosition: jobAdvertisement.numberOfPosition,
        applicationDeadline: jobAdvertisement.applicationDeadline,
        active: jobAdvertisement.active,
        employeePosition: {
          id: jobAdvertisement.employeePositionId,
        },
        city: {
          id: jobAdvertisement.cityId,
        },
        employer: {
          id: jobAdvertisement.employerId,
        },
        workingPlaceType: {
          id: jobAdvertisement.workingPlaceTypeId,
        },
        workingTimeType: {
          id: jobAdvertisement.workingTimeTypeId,
        },
      })
    );
    return axios.post(
      this.currenthost + "/api/jobadvertisements/add",
      JSON.stringify({
        description: jobAdvertisement.description,
        minSalary: jobAdvertisement.minSalary,
        maxSalary: jobAdvertisement.maxSalary,
        numberOfPosition: jobAdvertisement.numberOfPosition,
        applicationDeadline: jobAdvertisement.applicationDeadline,
        active: jobAdvertisement.active,
        employeePosition: {
          id: jobAdvertisement.employeePositionId,
        },
        city: {
          id: jobAdvertisement.cityId,
        },
        employer: {
          id: jobAdvertisement.employerId,
        },
        workingPlaceType: {
          id: jobAdvertisement.workingPlaceTypeId,
        },
        workingTimeType: {
          id: jobAdvertisement.workingTimeTypeId,
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  update(jobAdvertisement) {
    return axios.put(
      this.currenthost + "/api/jobadvertisements/update",
      jobAdvertisement
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost + "/api/jobadvertisements/delete?id=" + id
    );
  }
}
