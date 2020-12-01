import React from 'react';
import './AppFallBack.scss';

const AppFallBack = () => {


    return <div className="notFound">
        <h1> Ошибка 404</h1>
        <h2>Вы зашли на темную сторону, тут происходят страшные вещи</h2>
            <div className="notFoundImg">
            </div>
       <h1> <a href="/">Вам лучше вернуться на светлую сторону </a>   </h1>
  
    </div>
}
export default AppFallBack;