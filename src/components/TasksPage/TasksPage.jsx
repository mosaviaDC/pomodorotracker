import React, { useState } from 'react';

import './TasksPage.scss';


import UserTasksList from '../UserTasksList/UsetTasksList';
import AddTask from '../AddTask/AddTask'
import TasksService from '../../services/tasksservice'

const TasksPage = () => {
    const [tasks, updateTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    document.title = "Задачи";

    const GetTasks = () => {
        setLoading(true);
        TasksService.GetTasks().then(
            (response) => {
                updateTasks(response);
                setLoading(false)
            }, (error) => {
                console.log(error.response);
                setLoading(false)
            },
        
        );
       
     
    }

    return <div className="container-fluid TasksPage">
        

        <UserTasksList Tasks={false}/>
              <AddTask/>
        <button type="button" onClick={GetTasks} className="btn btn-info">Инфо</button>
        {loading && (
            <div className="loading-container">
                <div className="yellow"></div>
                <div className="red"></div>
                <div className="blue"></div>
                <div className="violet"></div>
            </div>   
            
       )
        }
        </div>
}

export default TasksPage;