import React from 'react';
import TasksPage from '../TasksPage/TasksPage';
import Login from '../Login/Login'
import { Switch, Route, Link } from "react-router-dom";
import Register from '../Register/Register';
import NavBar from '../NavBar/NavBar';
 const App = () => {
     return <div>
         <NavBar/>
          <Switch>
             <Route path="/tasks" component={TasksPage} />
             <Route exact path="/signup" component={Register} />
             <Route exact path="/login" component={Login} />
         </Switch>
         </div>
}
export default App;