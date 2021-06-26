import axios from "axios";

export default class JobSeekerCvService{
    getJobSeekerCvSummary(){
        return axios.get("http://localhost:8080/api/JobSeekerCvs/GetCvInfoSummary")
    }
}