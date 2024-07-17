import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";


const Router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        path: "",
        element: <Home/>,
    }, {
        path: "contact",
        element: <Contact/>,
    }, {
        path: "about",
        element: <About/>
    },
        {
            path: "*",
            element: <Navigate to="/"/>,
        }]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={Router}/>
    </React.StrictMode>
);

reportWebVitals();
