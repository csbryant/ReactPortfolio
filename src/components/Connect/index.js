import React from 'react';
import './Connect.css';
import GitHub from "../../Images/github.png";
import LinkedIn from "../../Images/linkedin.png";

function Connect() {
    return (
        <div>
            <a href="https://github.com/csbryant" id="rotator">
                <img src={GitHub} class="social" alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/christopher-bryant-b80a05140/" id="rotator">
                <img src={LinkedIn} class="social" alt="LinkedIn Icon" />
            </a>
        </div>
    );
}

export default Connect;