import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App1';
import {NewApp} from './App2'
import {Rafcexample} from './Rafcexample'
import reportWebVitals from './reportWebVitals';
import {Propsintro} from './Propsintro';
import {CounterClock} from './usestateex';
import {Calc} from './calc'
import {Usehook2} from './useeffectex2';
import {Contact} from './contact';
import {CounterDifference} from './CountDifference'
import { Dependencyarray } from './Dependenxyarray';
import { Textboxstate } from './Textboxstate';
import { Signup2} from './Signup2';
import { WelcomeHome } from './WelcomeHome';
import { Frontendtables} from './frontendtables';
import { BrowserRouter } from 'react-router-dom';
import { Frontendtest } from './Frontendtest';
import Fullproject1 from './fullproject1';
import { Taskpage } from './Taskpage';
import {Routingtest} from './routingtest'
import { Ecommerce } from './Ecommerce';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Routingtest/>
{/* <Routingtest/> */}
  {/* <Rafcexample/> */}

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
