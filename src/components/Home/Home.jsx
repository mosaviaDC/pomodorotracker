import React from 'react';
import './Home.scss';
import Student from '../../assets/img/student.svg';
import Woman from '../../assets/img/woman.svg';
import WorkPanel from '../../assets/img/workpanel.svg';
import LikeMan from '../../assets/img/likeman.svg';


const Home = () => {
    return <div>     
        <div className="text-xs-center homeMainBlock block">
            <h1> Что это такое? </h1>
            <p>В современном мире с каждым днем становится все больше задач. Отличный интсрумент тайм-менеджмента - метод pomodoro</p>
            <img src={Student} className="img-rounded homeMainImg" alt="..." />

            <h4>Это приложение поможет правильно использовать технику помидора, посдкажет время, когда лучше сделать перерыв, или сконцентрироваться над задачей  </h4>
            <a href='/tasks'> Перейти к задачам ! </a>
        </div>

        <div className="text-xs-center homeMainBlock block">
            <h1> Как работать с этой техникой? </h1>
            <p>Суть техники помидора — в таймере на определенное время. Пока таймер ведёт обтратный отсчет, нужно сконцентрироваться на задаче и не отвлекаться на другие дела. Классически, это 25 минут, после этого — перерыв в 5 минут</p>
            <p>Создайте задачу, указав количество минут, которые можно на нее потратить, а затем запустите таймер</p>
            <img src={Woman} className="img-rounded homeMainImg" alt="..." />

            <h4>Приложение само разобьет задачу на промежутки, напомнит о перерыве или старте нового периода</h4>
            <a href='/tasks'> Перейти к задачам ! </a>
        </div>

        <div className="text-xs-center homeMainBlock block">
            <h1> Советы при работе! </h1>
            <li>Конкретизируйте задачи, которые хотите решить. Лучше, если они записаны и видны перед глазами </li>
            <li> Задачи можно хранить прямо здесь </li>
            <li>Подключите уведомления в телеграмм, это очень удобно </li>
            <img src={WorkPanel} className="img-rounded homeMainImg right" alt="..." />
           
            <li> Не забывайте отдыхать - это главная ошибка при работе с техникой помидора </li>
            <li> Если что-то пошло не по плану, помидор можно поставить на паузу </li>
            <li> Создав задачу, не забудьте ее запустить </li>
              <h4> Приложение можно использовать  и как простой ToDo лист</h4>
            <a href='/tasks'> Создать свою первую задачу ! </a>
        </div>

        <div className="text-xs-center homeMainBlock block">
            <h1>Это правда эффективно! </h1>
            <h4><i className="fas fa-lightbulb"/> абсолютно бесплатно </h4>
            <p>Попробуйте использовать технику в течение дня. Результат будет впечатляющий!</p>
            <img src={LikeMan} className="img-rounded homeMainImg right" alt="..." />
            <h4> Главное  — это четкое соблюдение таймера, приложение отлично поможет справиться с этим.</h4>

           
            <a href='/tasks'>Попробовать технику помидора</a>
        </div>

        <div className="footer">
            <p> © Denis Cherniy 2020  </p>
             <p>  mosavia.dc@gmail.com       </p>
        </div>
        


    </div>

}

export default Home;