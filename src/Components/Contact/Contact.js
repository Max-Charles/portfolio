import React from "react";
import "./Contact.scss";

function Contact(props) {
  return (
    <div>
      <p>
        For any perminant, contract or freelance roles please send me a message
        via the form below or give me a call on: +44 7949 44 3603
      </p>
      <form>
        <input type="text" defaultValue={"Email"} />
        <input type="textbox" defaultValue={"Message"} />
      </form>
    </div>
  );
}

export default Contact;
