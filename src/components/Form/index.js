import React from 'react';
import './Form.css';


function Form() {

    return (
        <div>
        <br></br>
        <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="John Doe"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="example@email.com"
          />
        </div>
        <div class="form-group">
        <div class="mb-3">
          <label for="validationTextarea">Message</label>
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Insert Inquiry Here"
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