import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Textbox from "../components/Textbox";
import "../styles/page-css/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with real submit logic
    console.log({ name, email, message });
    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact | LyOPix Coding</title>
      </Helmet>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <Textbox id="name" placeholder="Name:" value={name} onChange={(e) => setName(e.target.value)} />
        <Textbox id="email" type="email" placeholder="Email:" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Textbox id="message" as="textarea" placeholder="Message:" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
