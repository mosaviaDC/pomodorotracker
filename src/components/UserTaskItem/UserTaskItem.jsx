﻿import React, { useState } from 'react';
import './UserTaskItem.scss';
import TasksService from '../../services/tasksservice'
//Непосредственно список задач пользователя или сообщение об его отсутсвии
const UserTaskItem = (task) => {
    const [loading, setLoading] = useState(false);



    const onDeleteButtonClick = () => {
        setLoading(true);
        TasksService.DeleteTask(task.task.id).then(() => {
            setLoading(false);
        },
            (error) => {
                setLoading(false);
                console.log(error.response);
            });
    };

    const onFinishButtonClick = () => {
        setLoading(true);
        let starttask = task.task;     //Что бы не крутился значок раньше времени
        starttask.isDone = true;
        TasksService.UpdateTaskStatus(starttask).then(() => {
            task.task.inDone= true;
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
            });

    };
 

   





    const onStartButtonClick = (e) => {
        setLoading(true);
        let starttask = task.task;     //Что бы не крутился значок раньше времени
        starttask.inProgress = true;
        TasksService.UpdateTaskStatus(starttask).then(() => {
            task.task.inProgress = true;
            e.target.style.cssText = "display:none";
            document.getElementById('pauseBtn').style.cssText = 'display:inline';
            setLoading(false);
        },
        (error) => {
            console.log(error.response);
            setLoading(false);
            });

    };
    const onPauseButtonClick = (e) => {
        setLoading(true);
        let starttask = task.task;
        starttask.inProgress = false;
        TasksService.UpdateTaskStatus(starttask).then(() => {

            task.task.inProgress = false;
            e.target.style.cssText = "display:none";
            document.getElementById('startBtn').style.cssText = 'display:inline';
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
        });
    }




return <div className="userTaskItem container-fluid">
         {task.task.inProgress && !task.task.isDone && (
          <i className="fas fa-circle-notch fa-spin taskbtn doneBtn" onClick={onFinishButtonClick}></i>
        )}

        {task.task.isDone && (
        <i className="fas fa-check-circle  taskbtn doneBtn" ></i>
        )}

         {!task.task.inProgress && !task.task.isDone && (
        <i className="fas fa-circle-notch taskbtn doneBtn" onClick={onFinishButtonClick}></i>
         )}

        <span className="taskName"> {task.task.taskName} </span>

        <span className="taskTime">
        Текущий помидор : {task.task.currentPomodoroTime}
         </span>

        
         
        <i className="far fa-pause-circle taskbtn  " id="pauseBtn" onClick={onPauseButtonClick} />   
        <i className="far fa-play-circle taskbtn  " id="startBtn" onClick={onStartButtonClick}/>   
        <i className="far fa-minus-circle taskbtn  right" onClick={onDeleteButtonClick}/> 

        {loading && (
            <div className="loading-container">
                <div className="yellow"></div>
                <div className="red"></div>
                <div className="blue"></div>
                <div className="violet"></div>
            </div>   
        )}

    </div>
}
export default UserTaskItem;