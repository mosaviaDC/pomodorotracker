import './AddTask.scss';
import React from 'react';
import AuthService from '../../services/authservice';
import { useState } from 'react';

//Отвечает за открытие/закрытие форм
const AddTask = (FirstTask) => {



    const AddButtonClick = (e) => {
        let addbtns = [null];

        addbtns = Array.from(document.getElementsByClassName('btn-lg'));
        addbtns.forEach(i => i.style.cssText = "display:none");
        document.getElementById('addForm').style.cssText = "display:block";
        document.getElementById('UserTasks').style.cssText = "display:none";     // Скрываем список задач
        

    

    };


  
    return <div>
     
        {FirstTask.FirstTask &&(
        <div>
            <button type="button" className="btn btn-success btn-lg" onClick={AddButtonClick}>Добавить первую задачу</button>
             </div>
        
            )}
        {!FirstTask.FirstTask && (
            <div>
                <button type="button" className="btn btn-light btn-lg fixed-bottom" onClick={AddButtonClick}> + Добавить задачу</button>
            </div>
                  
        )}


    </div>


}
export default AddTask;