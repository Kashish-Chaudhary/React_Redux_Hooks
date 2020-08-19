import React from 'react';
import './App.css';
import Navbar from './Components/Navbar1';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from './Components/Home';
import { Provider } from 'react-redux'
import store from './store'
// import {BrowserRouter,Route,} from 'react-router-dom'
import Cart from  './Components/Cart'


function App() {
  return (
    <Provider store={store}>      
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Navbar/> */}
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cart' component={Cart}/>
      </Switch>
      
     
      </BrowserRouter>
      

    </div>
    </Provider>
  );
}

export default App;
//--<Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.-
