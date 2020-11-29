import React from 'react';

import './TasksPage.scss';


import UserTasksList from '../UserTasksList/UsetTasksList';
import AddTask from '../AddTask/AddTask'

const TasksPage = () => {
    document.title = "Задачи";
    return <div className="container-fluid TasksPage">


        <UserTasksList Tasks={false}/>
              <AddTask/>
    
        </div>
}

export default TasksPage;