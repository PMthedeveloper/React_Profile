import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Index from './components/pages/Index';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Adduser from './components/users/Adduser';
import Edituser from './components/users/Edituser';
import ViewUser from './components/users/ViewUser';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Index}/>
    <Route exact path="/view" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/users/add" component={Adduser}/>
    <Route exact path="/users/edit/:id" component={Edituser}/>
    <Route exact path="/users/:id" component={ViewUser}/>
    <Route component={NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
