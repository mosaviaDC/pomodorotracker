﻿import React from 'react';
import TasksPage from '../TasksPage/TasksPage';
import Login from '../Login/Login'
import { Switch, Route } from "react-router-dom";
import Register from '../Register/Register';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import AppFallBack from '../AppFallBack/AppFallBack'
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import AppSendEmail from '../AppSendEmail/AppSendEmail';
import ResetPassword from '../ResetPassword/ResetPassword';
import SuccesPasswordReset from '../SuccesPasswordReset/SuccesPasswordReset'
import '../passwordSH.scss';
 const App = () => {
     return <div>
         <NavBar />
         <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/tasks" component={TasksPage}/>
             <Route exact path="/signup" component={Register} />
             <Route exact path="/signin" component={Login} />
             <Route exact path="/forgot" component ={ForgotPassword} />
             <Route exact path ="/succesEmailSend:email" component ={AppSendEmail} />
             <Route path="/reset" component ={ResetPassword} />
             <Route path="/succesPasswordReset:code" component={SuccesPasswordReset}/>
             <Route path='*' exact component={AppFallBack} />

         </Switch>
       
         </div>
}
export default App;