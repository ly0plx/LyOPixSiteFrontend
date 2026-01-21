import { Helmet } from "react-helmet-async";
import { useState } from "react";
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
      <div className="contact-inner">
        <Helmet>
          <title>Contact | LyOPix Coding</title>
          <meta name="description" content="Got a question, idea, or just want to say hi? Drop me a message—I actually read them. Whether it’s about the blog, my tools, or something you’re building, I’ll get back to you." />
          <link rel="canonical" href="https://lyopix.com/contact" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="Got a question, idea, or just want to say hi? Drop me a message—I actually read them. Whether it’s about the blog, my tools, or something you’re building, I’ll get back to you." />
          <meta property="og:url" content="https://lyopix.com/contact" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
