import React, {useEffect} from "react";
import Matrix from "./Matrix";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Color Matrix"
    }, [])
    return (
        <>
            <div className="App">
                <h1>Matrix Color Changer</h1>
                <Matrix/>
            </div>
        </>
    );
}

export default Home;