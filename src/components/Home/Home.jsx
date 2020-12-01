import React from 'react';
import './Home.scss';
const Home = () => {



    return<div>
    <div className="container-fluid">
        <div className="row no-gutters">
            <div className="col-8 img" id="imgfirst">         
             </div>
            <div className="col-4" id="description">
             <h1> Зачем это нужно?</h1>
             <p> Техника Помодоро - это эффективный способ управления своим временем.
               Данное приложение поможет эффективнее работать над задачами и соблюдать промежутки</p>
             <h1> <a href='/signup'> Попробовать </a>       </h1>
        </div>
     </div>
     <div className="row no-gutters">
         <div className="col-4" id="description">
             <h1>Как это работает?</h1>
             <p>Вам необходимо лишь указать примерное время на задачу. Приложение само разобъет ее на нужное количество промежутков.
             Запустите задачу, а приложение напонмит когда нужно будет сделать перерыв
             </p>
             <h1> <a href='/signup'> Попробовать </a>       </h1>
             
         </div>
         <div className="col-8  img" id="imgsecond">
        
         </div>
     </div>
     <div className="row no-gutters">
         <div className="col-8 img" id="imgthird">
    

         </div>
         <div className="col-4" id="description">
             <i className="far fa-play-circle"> Запускает задачу </i>
             <i className="fas fa-circle-notch ">Завершает задачу</i>
             <i className="far fa-minus-circle" > Удаляет задачу</i>
      
         </div>
     </div>
     <div className="row no-gutters">
     
         <div className="col-12" id="description">
             <h1> Просто попробуйте! </h1>
                <h2>Ваша продуктивность заметно вырастет</h2>
                 <h1> <a href='/signup'> Попробовать </a>       </h1>
         </div>                    

             </div>
    </div>
      <div className="bg-light">
            © 2020 Denis Cherniy, mosavia.dc@gmail.com
       </div>
    </div>



}

export default Home;