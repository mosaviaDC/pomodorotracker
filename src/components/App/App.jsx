import React from 'react';
import TasksPage from '../TasksPage/TasksPage';
import Login from '../Login/Login.jsx'
import { Switch, Route, Link } from "react-router-dom";
import Register from '../Register/Register.jsx';
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