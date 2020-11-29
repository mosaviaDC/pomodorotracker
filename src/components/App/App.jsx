import React from 'react';
import TasksPage from '../TasksPage/TasksPage';
//import Login from '../Login/Login'
import { Switch, Route, Link } from "react-router-dom";
//import Register from '../Register/Register';
 const App = () => {
     return <div>
          <Switch>
         <Route path="/tasks" component={TasksPage} />

         </Switch>
         </div>
}
export default App;