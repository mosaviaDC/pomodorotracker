import React, { useState } from 'react';
import './UserTaskCard.scss';
import Form from "react-validation/build/form";
import TasksService from '../../services/tasksservice';
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru',ru);
const UserTaskCard = (task)=>{
    const [descriptionTask,setDescriptionTasks] = useState(task.task.taskDescription);
    const [dataTime,setDataTime]= useState(
        
        new Date(task.task.taskDateTime).setHours(new Date(task.task.taskDateTime).getHours()+3)

        );

    const [loading, setLoading] = useState(false);

    const FinishButtonClick = ()=>{
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

    }
    const RestartButtonClick = ()=>{
        setLoading(true);
        let starttask = task.task;     //Что бы не крутился значок раньше времени
        starttask.isDone =false;
        TasksService.UpdateTaskStatus(starttask).then(() => {
            task.task.inDone= false;
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
            });

    }
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

    const onNotifyOnClick=(e)=>{
        setLoading(true);
            let starttask = task.task;     //Что бы не крутился значок раньше времени
            starttask.notify = true;
            TasksService.UpdateTaskStatus(starttask).then(() => {
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
            });

    }
    const onImportantOnClick=(e)=>{
        setLoading(true);
            let starttask = task.task;     //Что бы не крутился значок раньше времени
            starttask.important = true;
            TasksService.UpdateTaskStatus(starttask).then(() => {
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
            });

    }
    const onImportantOffClick=(e)=>{
        setLoading(true);
            let starttask = task.task;     //Что бы не крутился значок раньше времени
            starttask.important = false;
            TasksService.UpdateTaskStatus(starttask).then(() => {
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
            });

    }

    const onNotifyOffClick=(e)=>{
        setLoading(true);
            let starttask = task.task;     //Что бы не крутился значок раньше времени
            starttask.notify = false;
            TasksService.UpdateTaskStatus(starttask).then(() => {
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
            });

    }
    
    const onDescriptionChange = (e)=>{
    
        setDescriptionTasks(e.target.value);
    }
 
    const onDescriptionSubmit = (e)=>{
        setLoading(true);
        let starttask = task.task;     //Что бы не крутился значок раньше времени
        starttask.taskDescription= descriptionTask;
        TasksService.UpdateTaskStatus(starttask).then(() => {
            setLoading(false);
        },
            (error) => {
                console.log(error.response);
                setLoading(false);
            });
        
    }
    const onEnterPress = (e)=>{
        if (e.keyCode ===13 && e.shiftKey === false){
                 onDescriptionSubmit();
        }
    }
    const onTimeChange = (e)=>{
        
         setLoading(true);
         let starttask = task.task;     //Что бы не крутился значок раньше времени
         starttask.taskDateTime= e;
         TasksService.UpdateTaskStatus(starttask).then(() => {
             setLoading(false);
             setDataTime(e);
         },
             (error) => {
                 console.log(error.response);
                 setLoading(false);
             });


    }
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
      }

   







 


 




    

    return <div className="col-md-12" id="userTaskCard">
       
    <div className="container-fluid userTaskCard">
   
  


      <p>  <i className="fas fa-times fa-lg closeButton" onClick={task.onCloseButton}></i> 
    </p>

     <p> {!task.task.isDone && (
          <i className="fas fa-circle-notch  taskbtn doneBtn" onClick={FinishButtonClick} >{task.task.taskName}</i>
       )}
       {task.task.isDone && (
        <i className="fas fa-check-circle  taskbtn doneBtn" onClick={RestartButtonClick}>Задача {task.task.taskName} завершена  </i>
        )}
        
        {!task.task.important &&(
            <i className="far fa-star" onClick={onImportantOnClick}></i>
        )}
        {task.task.important && (
            <i className="fas fa-star importantStar" onClick={onImportantOffClick}></i>
        )}
        
        
        
    </p>
       
     <p> {!task.task.notify && (
             <i className="far fa-bell-slash" onClick={onNotifyOnClick}>Не напоминать</i>
         )}
         {task.task.notify && (
             <i className="far fa-bell" onClick={onNotifyOffClick}>Напомнить</i>
         )}
    </p>

    <div>
    
    
         <i className="far fa-calendar-alt" >Изменить дату выполнения
         
    <DatePicker selected={dataTime} showTimeSelect onChange={data=>onTimeChange(data)}
        timeFormat="p"
        locale="ru"
        timeIntervals={15}
        dateFormat="Pp"
        filterTime={filterPassedTime}
        minDate={new Date()}
        showWeekNumbers
     />
    </i>
      
    </div>
    <p>
    <i className="far fa-trash-alt" onClick={onDeleteButtonClick}>Удалить задачу</i>
    </p>

   

    <Form >   

    <p><textarea name="description" placeholder="Добавить описание"  className="description" value={descriptionTask} onChange={onDescriptionChange}  onKeyDown={onEnterPress}   ></textarea></p>

    </Form>

 
    
     
    </div>


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
export default UserTaskCard;