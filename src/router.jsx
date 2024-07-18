import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: []
    }
])