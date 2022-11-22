import React from "react";
import "./Contact.scss";
import Phone from "../../Assets/Images/phone.svg";
import Mail from "../../Assets/Images/mail.svg";
import LinkedIn from "../../Assets/Images/linkedin.png";
import GitHub from "../../Assets/Images/Github.png";

function Contact(props) {
  return (
    <div className="contact">
      <p className="contact__info">
        For business enquiries or to contact me about full time or contract
        roles please get in touch.
      </p>
      <div className="contact__links">
        <div className="contact__link">
          <img
            className="contact__link-icon"
            src={Phone}
            alt="mobile"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="contact__link-title">Mobile: +44 7949443603</p>
        </div>
        <div className="contact__link">
          <img
            className="contact__link-icon"
            src={Mail}
            alt="email"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="contact__link-title">Email: maxcharlesuk@gmail.com</p>
        </div>
        <div className="contact__quick-link">
          <a href="https://www.linkedin.com/in/max-charles1/" target="_blank">
            <img
              className="contact__quick-link-icon"
              src={LinkedIn}
              alt="LinkedIn"
              onClick={(e) => e.stopPropagation()}
            />
          </a>
          <a href="https://github.com/Max-Charles" target="_blank">
            <img
              className="contact__quick-link-icon"
              src={GitHub}
              alt="Github"
              onClick={(e) => e.stopPropagation()}
            />
          </a>
        </div>
      </div>
      <p className="contact__info">Or use the quick form below:</p>
      <form className="contact__form" onClick={(e) => e.stopPropagation()}>
        <input
          className="contact__email"
          type="text"
          placeholder="Email"
          required
        />
        <input
          className="contact__subject"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          className="contact__main"
          name="main"
          id="main"
          cols="30"
          rows="10"
          placeholder="Insert message..."
          required
        ></textarea>
        <button className="contact__button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
