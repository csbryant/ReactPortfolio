import React from "react";
import Container from "../../components/Container";
import './Bio.css';
import ProfilePic from "../../Images/profilepic.png"

function Bio() {
    return (
        <div className="bio">
            <Container>
                <h1>Hello. My name is Chris Bryant.</h1>
                <br></br>
                <img className="profilepic" src={ProfilePic} />
                <br></br>
                <p class="biotext">I’m a front-end developer from Los Angeles, CA with a passion for creating interfaces that are innovative, yet familiar and simple to use. I believe in the importance of capturing a client’s voice and projecting it in every piece of code thanks to my knowledge of <span class="importantcolor">Javascript, Node, CSS, React,</span> and <span class="importantcolor">responsive web design</span> that I’ve learned at the coding program at UCLA.</p>
                <p class="biotext">I like to describe myself as a community builder, both in creating products that connect people online, and also in communicating effectively with others in the work environment.</p>
                <p class="biotext">Most notably, I simply love to work. Working in front-end development is a joy to me, and I believe that my passion and drive for accomplishing tasks creates an outcome that always exceeds my client’s expectations.</p>
                <p class="biotext">
                    <a href="https://docs.google.com/document/d/1az-wSV1vJKCTGj-gub7cWPenTlD4eTRo7FjFbrteFaU/edit?usp=sharing">
                        <button type="button" class="btn btn-primary">Full Resume Here</button>
                    </a>
                </p>
            </Container>
            <br></br>
        </div>
    )
}

export default Bio;