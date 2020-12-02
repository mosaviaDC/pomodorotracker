import React, { useState } from 'react';

import './TasksPage.scss';


import UserTaskItem from '../UserTaskItem/UserTaskItem';
import AddTask from '../AddTask/AddTask';
import TasksService from '../../services/tasksservice';
import AuthService from '../../services/authservice';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Image from '../../assets/img/graph-man.svg';
import { useEffect } from 'react';

const TasksPage = (isLogin) => {
    const [tasks, updateTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isEntered, setIsEntered] = useState(false);
    const [telegramUserName, setTelegramUserName] = useState(null);
    document.title = "Задачи";

    const GetTasks = () => {

        setLoading(true);
        TasksService.GetTasks().then(
            (response) => {
                updateTasks(response);
               
                setLoading(false)
            }, (error) => {
                console.log(error);
                setLoading(false)
            },
        
        );
       
     
    }
    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setIsEntered(true);
            GetTasks();

            if (user.telegramUserName) {
                setTelegramUserName(user.telegramUserName);
            }
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


        }












    },[])





    return <div className="container-fluid TasksPage">
        {!telegramUserName && (
            <p> <i className="fas fa-lightbulb"></i> Можно добавить уведомления в телеграмме, <a className="telegramLink" href="https://t.me/PomodoroReminder_bot"> @PomodoroReminder_bot</a>  </p>
        )}
        {telegramUserName && (
            <p> <i className="fas fa-lightbulb"></i> Подключен telegram @{telegramUserName} </p>
        )}
        {loading && (
            <div className="loading-container">
                <div className="yellow"></div>
                <div className="red"></div>
                <div className="blue"></div>
                <div className="violet"></div>
            </div>   
            
        )
        }
        {tasks.length ===0 && !loading && isEntered && (
             <div>
            <div id="UserTasks" >
                <h1>Еще нет задач</h1>
                <img  className="noTasksImg" src={Image}/>
                <p>Сосредоточьтесь на своем дне</p>
                <p>Коснитесь кнопки ниже, чтобы создать свою первую задачу!</p>
               
                </div>
                <AddTask FirstTask />
             </div>
        )
        }
        {!isEntered && (
            <div id="UserTasks" >
                <h1>Еще нет задач</h1>
                <img className="noTasksImg" src={Image} />
                <p>Сосредоточьтесь на своем дне</p>
                <p>Зарегистрируйтесь и создайте свою первую задачу!</p>
                <a href="/signup"> Регистрация </a>  или <a href="/signin"> Вход в аккаунт  </a>       

            </div>
         )}


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