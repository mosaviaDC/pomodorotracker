import './AddTaskButtonContainer.scss';
import React from 'react';


const AddTaskButtonContainer = () => {

   

    const AddTaskButtonClick = (e) => {
        let container = document.getElementById('addTaskButtonContainer');
        container.style.cssText = "display:none";
    }




    return <div className="AddTaskButtonContainer" id="addTaskButtonContainer" >
        <h1>Еще нет задач</h1>
        <p>Вы еще не создали ни одной задачи.</p>
        <p>Коснитесь кнопки, что бы создать свою первую задачу</p>
        <button type="button" className="btn btn-success btn-lg" onClick={AddTaskButtonClick}>Создать новую задау</button>
    </div>

}
export default AddTaskButtonContainer;