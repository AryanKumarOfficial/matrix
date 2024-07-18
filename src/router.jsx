import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import Contacts from "./components/Contacts.jsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{
            path: "",
            element: <Home/>
        }, {
            path: "/contacts",
            element: <Contacts/>
        }, {
            path: "*",
            element: <NotFound/>
        }]
    }
])