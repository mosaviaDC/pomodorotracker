import axios from 'axios';
import AuthService from './authservice'

const backurl ="/tasks"


const GetTasks = () => {
    return axios.get(backurl, {
        headers: {
            "Authorization": "Bearer " + AuthService.getAuthToken(),
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.data;
    });
};


export default {
    GetTasks
}
