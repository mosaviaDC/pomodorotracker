import React from 'react';

//Непосредственно список задач пользователя или сообщение об его отсутсвии
const UserTasksList = (Tasks) => {

    const UserTasks = () => {

 
        if (!Tasks.Tasks) {
            return <div id="UserTasks" >
                <h1>Еще нет задач</h1>
                <p>Вы еще не создали ни одной задачи.</p>
                <p>Коснитесь кнопки ниже, чтобы создать свою первую задачу!</p>
            </div>
        }
        else return <div id="UserTasks">
                    ахахахха
            </div>
  



       

    }
    return <UserTasks />;
}
export default UserTasksList;