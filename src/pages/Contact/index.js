import React from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Connect from "../../components/Connect";

function Contact() {
    return (
        <div className="contact">
            <Container>
                <h1>Contact</h1>
                <br></br>
                <Form />
                <br></br>
                <Connect />
            </Container>
        </div>
    )
}

export default Contact;