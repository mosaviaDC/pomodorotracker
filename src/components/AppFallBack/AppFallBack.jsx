import React from 'react';
import './AppFallBack.scss';
import Image from '../../assets/img/404.svg';

const AppFallBack = () => {


    return <div className="notFound">
        <h1> Ошибка 404</h1>
        <h2>Вы зашли на темную сторону, тут происходят страшные вещи</h2>
        <img src={Image} className="notFoundImg"/>
        <h1> <a href="/">Вам лучше вернуться на светлую сторону </a>   </h1>

        <h2> <a href="/signin">Войти</a> или <a href="/signup"> Зарегистрироваться </a>   </h2>

    </div>
}
export default AppFallBack;