import React from "react";
import "./contact.css";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h42duyi",
        "template_yht0es5",
        form.current,
        "4bPkhvzm2WvsqNdkP"
      )
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MessageOutlinedIcon fontSize="large" />
            <h4>Email</h4>
            <h5>dummyemail@email.com</h5>
            <a href="mailto:dummyemail@email.com" target="_blank" rel="noreferrer">
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <LinkedInIcon fontSize="large" />
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a href="https://www.linkedin.com/in/seanmunjal/">Reach Out</a>
          </article>
          <article className="contact_option">
            <LocalPhoneOutlinedIcon fontSize="large" />
            <h4>WhatsApp</h4>
            <h5>+17345487767</h5>
            <a
              href="https://api.whatsapp.com/send?phone+17345487767"
              target="_blank" rel="noreferrer"
            >
              Give me a call!
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
