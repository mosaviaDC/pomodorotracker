import './AddTask.scss';
import React from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import AuthService from '../../services/authservice'

//Отвечает за открытие/закрытие форм
const AddTask = () => {

    let [AddTaskFormComponent,displayAddTaskForm ] = React.useState(null);
   
    const AddButtonClick = (e) => {
        e.target.style.cssText = "display:none"; //Скрываем кнопку 
        document.getElementById('UserTasks').style.cssText = "display:none";     // Скрываем список задач


        displayAddTaskForm(<AddTaskForm />);
         AuthService.login("mosavia.DC@gmail.com", "{3657Lok}eB8mnR");

    };

    const CloseButtonClick = () => {
        displayAddTaskForm(null);
    };


    return <div>
        
  
        <button type="button" className="btn btn-success btn-lg" onClick={AddButtonClick}>Добавить задачу</button>
      

 
            {AddTaskFormComponent}
     </div>
}
export default AddTask;