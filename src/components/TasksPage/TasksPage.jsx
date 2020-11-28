import React from 'react';

import './TasksPage.scss';


import UserTasksList from '../UserTasksList/UsetTasksList';
import AddTaskButtonContainer from '../AddTaskButtonContainer/AddTaskButtonContainer'

const TasksPage = () => {
    return <div className="container-fluid TasksPage">



              <AddTaskButtonContainer/>
    
        </div>
}

export default TasksPage;