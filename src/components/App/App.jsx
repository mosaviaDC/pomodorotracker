import React from 'react';
import TasksPage from '../TasksPage/TasksPage';
import Login from '../Login/Login'
import { Switch, Route, Link } from "react-router-dom";
import Register from '../Register/Register';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import AppFallBack from '../AppFallBack/AppFallBack'
import ForgotPassword from '../ForgotPassword/ForgotPassword';
 const App = () => {
     return <div>
         <NavBar />
         <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/tasks" component={TasksPage}/>
             <Route exact path="/signup" component={Register} />
             <Route exact path="/signin" component={Login} />
             <Route exact path="/forgot" component ={ForgotPassword} />
             <Route path='*' exact component={AppFallBack} />
         </Switch>
       
         </div>
}
export default App;