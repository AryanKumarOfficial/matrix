import React from "react";

import ("../styles/about.css");

const About = () => {
    return (<section className="about">
        <h1>About This App</h1>
        <p>This React application demonstrates an interactive 3x3 matrix where users can click on each box to change
            its color. The main features of this app are:</p>

        <h2>Features</h2>
        <ul>
            <li>Click on any box in the 3x3 matrix to change its color to green.</li>
            <li>Click tracking ensures that when the last box is clicked, all previously clicked boxes change color
                to orange in the sequence they were clicked.
            </li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
            <li>React: A JavaScript library for building user interfaces.</li>
            <li>React Hooks: To manage state and side effects in the functional components.</li>
            <li>CSS: For styling the matrix and other components.</li>
        </ul>

        <h2>Author</h2>
        <p>This app was created by <a href="https://www.linkedin.com/in/aryankumarofficial/" target="_blank"
                                      rel="noopener noreferrer"><span>Aryan Kumar</span></a>.</p>

        <h2>Source Code</h2>
        <p>The source code for this project is available on <a href="https://github.com/your-repo" target="_blank"
                                                               rel="noopener noreferrer">
            <span>
            GitHub
            </span>
        </a>.</p>
    </section>);
};

export default About;
