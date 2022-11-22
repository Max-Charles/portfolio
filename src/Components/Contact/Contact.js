import React from "react";
import "./Contact.scss";
import Phone from "../../Assets/Images/phone.svg";
import Mail from "../../Assets/Images/mail.svg";
import LinkedIn from "../../Assets/Images/linkedin.png";
import GitHub from "../../Assets/Images/Github.png";
// import emailjs from "@emailjs/browser";
// import { useState } from "react";

function Contact() {
  // const [result, setResult] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_04l4z8e",
  //       "service_04l4z8e",
  //       e.traget,
  //       "AryscPVMhalTwq0O3"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.traget.reset();
  //   setResult(true);
  // };

  return (
    <div className="contact">
      <p className="contact__info">
        For business enquiries or to contact me about full time or contract
        roles please get in touch.
      </p>
      <div className="contact__links">
        <a href="tel:447949443603">
          <div className="contact__link" onClick={(e) => e.stopPropagation()}>
            <img className="contact__link-icon" src={Phone} alt="mobile" />
            <p className="contact__link-title">Mobile: +44 7949443603</p>
          </div>
        </a>
        <a href="mailto:maxcharlesuk@gmail.com">
          <div className="contact__link" onClick={(e) => e.stopPropagation()}>
            <img
              className="contact__link-icon"
              src={Mail}
              alt="email"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="contact__link-title">Email: maxcharlesuk@gmail.com</p>
          </div>
        </a>
        <div className="contact__quick-link">
          <a
            href="https://www.linkedin.com/in/max-charles1/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact__quick-link-icon"
              src={LinkedIn}
              alt="LinkedIn"
              onClick={(e) => e.stopPropagation()}
            />
          </a>
          <a
            href="https://github.com/Max-Charles"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact__quick-link-icon"
              src={GitHub}
              alt="Github"
              onClick={(e) => e.stopPropagation()}
            />
          </a>
        </div>
      </div>
      {/* <p className="contact__info">Or use the quick form below:</p>
      <form
        onSubmit={sendEmail}
        method="POST"
        className="contact__form"
        // onClick={(e) => e.stopPropagation()}
      >
        <input
          name="email"
          className="contact__email"
          type="email"
          placeholder="email"
          onClick={(e) => e.stopPropagation()}
          required
        />
        <input
          name="subject"
          className="contact__subject"
          type="text"
          placeholder="Subject"
          onClick={(e) => e.stopPropagation()}
          required
        />
        <textarea
          className="contact__main"
          name="message"
          id="main"
          cols="30"
          rows="10"
          placeholder="Insert message..."
          onClick={(e) => e.stopPropagation()}
          required
        ></textarea>
        <button
          className="contact__button"
          onClick={(e) => e.stopPropagation()}
        >
          Send Message
        </button>
      </form>
      {result ? (
        <p>Thank you for contacting me. I will be in touch soon!</p>
      ) : null} */}
    </div>
  );
}

export default Contact;
