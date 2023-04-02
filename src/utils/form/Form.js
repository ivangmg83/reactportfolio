import React, { useState } from 'react';
import './style.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [eMail, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [fieldRequiredError, setFieldRequiredError] = useState('')
  const [showError, setShowError] = useState(false);
  const handleInputChange = (e) => {
    setShowError(false);
    // Getting the value and name of the input which triggered the change
    const { name, eMail, message, value } = e.target;

    if (value === "" && name === "name") {
      setFieldRequiredError("Not empty values allowed")
    }
    if (value === "" && eMail === "email") {
      setFieldRequiredError("Not empty values allowed")
    }
    if (value === "" && message === "message") {
      setFieldRequiredError("Not empty values allowed")
    }
    if (value !== "" && name === "name") {
      setFieldRequiredError("")
    }
    if (value !== "" && eMail === "email") {
      setFieldRequiredError("")
    }
    if (value !== "" && message === "message") {
      setFieldRequiredError("")
    }
    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === 'name' ? setName(value) : setEmail(value) : setMessage (avalue);
    if (name === "name" || eMail === "" || message === "") {
      return setName(value);
    }
    if (name === "" || eMail === "email" || message === "") {
      return setEmail(value);
    }
    if (name === "" || eMail === "" || message === "message") {
      return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  
    if (name === "") {
      setFieldRequiredError ("Not empty values allowed")
    }
    if (eMail === "") {
      setFieldRequiredError("Not empty values allowed")
    }
    if (message === "") {
      setFieldRequiredError("Not empty values allowed")
    }
    if (name === "" || eMail === "" || message === "" || fieldRequiredError !== "") {
      setShowError(true);
      return
    }
    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name} I'll reach out shortly`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>
        Contact
      </p>
      <form className="form">
        <p>Name</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
        />
        <p>Email</p>
        <input
          value={eMail}
          name="email"
          onChange={handleInputChange}
          type="text"
        />
        <p>Message</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        {showError && <>
          <p>{fieldRequiredError}</p>
        </>
        }
      </form>
    </div>
  );
}

export default Form;
