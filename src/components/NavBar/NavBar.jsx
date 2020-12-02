import React, { useState, useEffect } from "react";
import AuthService from '../../services/authservice'
import { Link } from 'react-router-dom';
import './NavBar.scss';
const NavBar = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut =()=>{
        AuthService.logout();
    }

    return <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
                Помидор
            </Link>
            <div className="navbar-nav mr-auto">
              

              

               

             

            {currentUser ? (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link to={"/tasks"} id ="userName" className="nav-link">
                               {currentUser.firstName}
                        </Link>
                        </li>
                        {currentUser.telegramUserName && (
                            <li className="nav-item">
                                <Link to={"/tasks"} id="userName" className="nav-link">
                                    {currentUser.telegramUserName}
                                </Link>
                            </li>
                        )}
                        {!currentUser.telegramUserName && (
                            <a href="https://t.me/PomodoroReminder_bot" className="nav-link">Tele Bot </a>
                            )}


                    <li className="nav-item">
                        <a href="/login" className="nav-link" onClick={logOut}>
                            Выйти
              </a>
                    </li>
                </div>
                ) :
                (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                              Войти
              </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/signup"} className="nav-link">
                                Регистрация
              </Link>
                        </li>
                    </div>
                )}
      
            </div>
         </nav>  
    </div>
     

}
export default NavBar;