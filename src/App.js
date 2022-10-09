// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Pages/Signup';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Login from './Pages/Login'
import Navbar from './Pages/Navbar'



function App() {
  return (
      <BrowserRouter>
      <Navbar/>

        <Switch>

          <Route exact path={"/"} component={Home} />
          <Route exact path={"/signup"} component={SignUp} />
          <Route exact path={"/order"} component={Order} />
          <Route exact path={"/login"} component={Login} />





        </Switch>

      </BrowserRouter>


  );
}

export default App;
