import React, { useState } from "react";
import "./contacform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faEnvelope } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faEnvelopeSquare, faVoicemail } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact-container">
      <div className="card-container-contact">
        <div className="email">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="4x" /> 
          <h2>Email US</h2>
          <p>crish19@gmail.com</p>
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faWhatsapp} size="4x" />
          <h2>WhatsApp</h2>
          <p>0046729406310</p>
        </div>
      </div>
      <div className="text-form">
        <div className="text-contact-container">
          <div className="title-contact">Book & Contact</div>
          <div className="title-underline-contact"></div>
          <span>
            We will be glad to guide you, or if you prefer to explore the island
            by yourself, we can help set up a route for you.
          </span>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            facilis voluptate. Voluptas unde a asperiores nesciunt error, libero
            nulla facere? Libero odit aliquam explicabo praesentium nihil? Eos
            facere velit temporibus.
          </p>
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                required
                maxLength={150}
                style={{ width: "60%", height: "100px" }}
              />
            </div>
          </div>

          <button type="submit">{status}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
