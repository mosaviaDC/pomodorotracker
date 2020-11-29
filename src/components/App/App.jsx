import React from 'react';
import TasksPage from '../TasksPage/TasksPage';
import Login from '../Login/Login'
import { Switch, Route, Link } from "react-router-dom";
import Register from '../Register/Register';
import NavBar from '../NavBar/NavBar'
 const App = () => {
     return <div>
         <NavBar />,
          <Switch>
         <Route path="/tasks" component={TasksPage} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/register" component={Register} />
         </Switch>
         </div>
}
export default App;