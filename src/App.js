import React from "react";
import Matrix from "./components/Matrix";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
    return (<>
        <Navbar/>
        <Toaster
            position={'top-center'}
            reverseOrder={false}
        />
        <Outlet/>
        <Footer/>
    </>);
}

export default App;
