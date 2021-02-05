import axios from 'axios';
import AuthService from './authservice'

const backurl = "https://pomodorotodotracker.herokuapp.com/tasks";
const headers = {
    "Authorization": "Bearer " + AuthService.getAuthToken(),
    'Content-Type': 'application/json'
}

const GetTasks = () => {


    return axios.get(backurl, {
        headers: headers
    }).then((response) => {
        return response.data;
    });
};

const UpdateTaskStatus = (task) => {
    return axios.put(backurl +'/updatestatus', task,{
        headers: headers,
       
    });
}

const DeleteTask = (id) => {                       
 
    return axios.delete(backurl + '/delete/' + id, {
        headers: headers
    });
}



const AddTask = (taskName, taskTime, taskDescription = 'Описание задачи') => {

    const task = {
        taskName: taskName,
        taskTime: taskTime,
        taskDescription: taskDescription
    }
    return axios.post(backurl + '/addtask', task,{
       headers:headers
  

    }).then((response) => {
        return response.data;
    });
};


export default {
    GetTasks,
    AddTask,
    DeleteTask,
    UpdateTaskStatus
}
