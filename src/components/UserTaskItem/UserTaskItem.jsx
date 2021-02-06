import React, { useState } from 'react';
import './UserTaskItem.scss';
import TasksService from '../../services/tasksservice'
import UserTaskCard from '../UserTaskCard/UserTaskCard';
//Непосредственно список задач пользователя или сообщение об его отсутсвии
const UserTaskItem = (task) => {
    const [loading, setLoading] = useState(false);
    const [cardOpen,setCardOpen] = useState(false);
 

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
 

   

    const onInfoButtonClick = (e)=>{
        let userTaskItems = document.getElementsByClassName('userTaskItem container-fluid');
        for (let i=0;i<userTaskItems.length;i++){
            userTaskItems[i].style.cssText='display:none'; //скрываем все задачи пользователя
        }
        setCardOpen(true);
        document.onkeyup = function event (e){
            if (e.keyCode==27){
                onCloseButtonClick();
            }
      } 
      window.onbeforeunload = function(e) {
          alert('32322');
          e.preventDefault();
          onCloseButtonClick();
       }

   
    

  


    }

    const onCloseButtonClick = (e)=>{
        let userTaskItems = document.getElementsByClassName('userTaskItem container-fluid');
        for (let i=0;i<userTaskItems.length;i++){
            userTaskItems[i].style.cssText='display:inline-flex'; //скрываем все задачи пользователя
        }
        setCardOpen(false);
        document.onkeyup = null;
        window.onbeforeunload = null;
       
    }


    const onStartButtonClick = (e) => {
        setLoading(true);
        let starttask = task.task;     //Что бы не крутился значок раньше времени
        starttask.inProgress = true;
        TasksService.UpdateTaskStatus(starttask).then(() => {
            task.task.inProgress = true;
            //document.getElementById('pauseBtn').style.cssText = 'display:inline';
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
            //e.target.style.cssText = "display:none";
            //document.getElementById('startBtn').style.cssText = 'display:inline';
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
        });
    }

   


if (cardOpen){
    return     <UserTaskCard task={task.task}  onCloseButton={onCloseButtonClick}/>
}
else 
return  <div className="userTaskItem container-fluid">
         {task.task.inProgress && !task.task.isDone && (
          <i className="fas fa-circle-notch fa-spin taskbtn doneBtn"  onClick={onFinishButtonClick}></i>
          )}

        {task.task.isDone && (
        <i className="fas fa-check-circle  taskbtn doneBtn"> </i>
        )}

         {!task.task.inProgress && !task.task.isDone && (
        <i className="fas fa-circle-notch taskbtn doneBtn"  onClick={onFinishButtonClick}></i>
         )}
          <i className="fas fa-info-circle" onClick={onInfoButtonClick} ></i>
        <span className="taskName"> {task.task.taskName} </span>

    {task.task.inProgress && (
        <span className="taskPeridos">
            <i className="fas fa-stopwatch" id="stopWatch"></i> 
            {task.task.taskPeriods+1}
        </span>
        )}

        
        {task.task.inPomodoroPause &&  !task.task.isDone && (
              <span className="taskTime">
                 Пауза: {task.task.currentPomodoroPauseTime}
             </span>
            )}
        {task.task.currentPomodoroTime >= 0 && task.task.inProgress && !task.task.isDone && !task.task.inPomodoroPause && (
        <span>
            <i className="fas  fa-spin fa-hourglass-start" id="time"></i> {task.task.currentPomodoroTime}
        </span>
        )}
        
        {task.task.isDone && (
        <span>
            Задача завершена
        </span>
            )}
        {!task.task.inPomodoroPause && !task.task.inProgress && !task.task.isDone && (
        <span>
            Задача приостановлена 
        </span>
        )}
       




        
        {!task.task.inProgress && !task.task.isDone &&(
        <i className="far fa-play-circle taskbtn  " id="startBtn" onClick={onStartButtonClick} /> 
        )}
         {!task.task.inPomodoroPause && task.task.inProgress &&(
          <i className="far fa-pause-circle taskbtn  " id="pauseBtn" onClick={onPauseButtonClick} />   
          
        ) }
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