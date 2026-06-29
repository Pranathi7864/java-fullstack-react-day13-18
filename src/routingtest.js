import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { Frontendtest } from './Frontendtest';
import { Taskpage } from './Taskpage';
export function Routingtest()
{
    return(
        <BrowserRouter>
        <div>
            <h1>Routing</h1>
            <Routes>
                <Route path="/" element={<Frontendtest/>}/>
                <Route path="/task" element={<Taskpage/>}/>
              
            </Routes>
        
        </div>
        </BrowserRouter>
    );
}
