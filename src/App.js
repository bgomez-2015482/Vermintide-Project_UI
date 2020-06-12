import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Register from './pages/Register/Register';

function App() {
    return ( <
        BrowserRouter >
        <
        Switch >
        <
        Route exact path = "/register"
        component = { Register }
        /> <
        /Switch> <
        /BrowserRouter>
    );
}

export default App;