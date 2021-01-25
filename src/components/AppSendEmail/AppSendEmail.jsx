import React from 'react';


const AppSendEmail =(props) =>{

    return <div className='emailSucces'>
        <h1>Проверьте почтовый ящик 
        <p>{props.match.params.email}</p>
        </h1>
       
        <a href="/"> Вернуться на главную</a>
        
    </div>
}

export default AppSendEmail;
