import React from 'react';
import './Connect.css';
import GitHub from "../../Images/github.png";
import FB from "../../Images/fb.png";
import IG from "../../Images/IG.png";
import LinkedIn from "../../Images/linkedin.png";
import Twitter from "../../Images/twitter.png";

function Connect() {
    return (
        <div>
            <a href="https://github.com/csbryant" id="rotator">
                <img src={GitHub} class="social" alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/christopher-bryant-b80a05140/" id="rotator">
                <img src={LinkedIn} class="social" alt="LinkedIn Icon" />
            </a>
            <a href="https://www.instagram.com/tenderchris" id="rotator">
                <img src={IG} class="social" alt="Instagram Icon" />
            </a>
            <a href="https://www.twitter.com/tenderchris" id="rotator">
                <img
                    src={Twitter}
                    class="social"
                    alt="twitter Icon"
                />
            </a>
            <a href="https://www.facebook.com/christophersmithbryant" id="rotator">
                <img src={FB} class="social" alt="Facebook Icon" />
            </a>
        </div>
    );
}

export default Connect;