import React, { useState } from 'react';

import './TasksPage.scss';


import UserTaskItem from '../UserTaskItem/UserTaskItem';
import AddTask from '../AddTask/AddTask'
import TasksService from '../../services/tasksservice'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import { useEffect } from 'react';

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
    useEffect(()=>{
        GetTasks();

        const interval = setInterval(() => {
            TasksService.GetTasks().then(
                (response) => {
                    updateTasks(response);
                }, (error) => {
                    console.log(error.response);
                },
            );

        }, 1500);              
        return () => clearInterval(interval);













    },[])





    return <div className="container-fluid TasksPage">
        <p> <i className="fas fa-lightbulb"></i> Можно добавить уведомления в телеграмме, <a className="telegramLink" href="https://t.me/PomodoroReminder_bot"> @PomodoroReminder_bot</a>  </p>
        {loading && (
            <div className="loading-container">
                <div className="yellow"></div>
                <div className="red"></div>
                <div className="blue"></div>
                <div className="violet"></div>
            </div>   
            
        )
        }
        {tasks.length ===0 && !loading && (
             <div>
            <div id="UserTasks" >
                <h1>Еще нет задач</h1>
                <p>Сосредоточтесь на своем дне</p>
                <p>Коснитесь кнопки ниже, чтобы создать свою первую задачу!</p>
               
                </div>
                <AddTask FirstTask />
             </div>
        )
        }
        {tasks.length > 0 && !loading && (


            <div>
                <div id="UserTasks">
                    Количество задач :{tasks.length}
                    {tasks.length > 0 && (
                        tasks.map(task =>
                            <UserTaskItem key={task.id} task={task}

                            />
                        ))



                    }


                </div>
                <AddTask FirstTask={false} />
            </div>
      


        )}

        <AddTaskForm />
    
        </div>
}

export default TasksPage;