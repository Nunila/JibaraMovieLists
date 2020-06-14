import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import LoginComponent from "./components/LoginComponent";

const login = <LoginComponent/>

ReactDOM.render(
    login,
    document.getElementById('root')
);
