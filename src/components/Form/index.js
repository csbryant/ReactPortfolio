import React, { useState } from 'react';
import './Form.css';
import { db } from "../../firebase";


function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contacts').add({
      name: name,
      email: email,
      message: message,
    })
    .then (() => {
      alert("Message has been submitted!")
    })
    .catch(error => {
      alert(error.message);
    })

    setName("");
    setEmail("");
    setMessage("");
  }

    return (
        <div>
        <br></br>
        <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
        <div class="mb-3">
          <label for="validationTextarea">Message</label>
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Insert Inquiry Here"
            value={message}
            onChange={(e) => setMessage(e.target.value) }
            required
          ></textarea>
        </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
      </div>
    );
}

export default Form;