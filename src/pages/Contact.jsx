import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "../styles/page-css/Contact.css";

const WORKER_URL = "https://email.tanner-ordonez.workers.dev/contact"; // ← update to your worker domain

export default function Contact() {
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [message,  setMessage]  = useState("");
  const [honeypot, setHoneypot] = useState(""); // never shown to real users
  const [status,   setStatus]   = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(WORKER_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ name, email, message, honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMsg("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-container">
        <div className="contact-inner">
          <Helmet>
            <title>Contact | LyOPix Coding</title>
            <meta name="description" content="Got a question, idea, or just want to say hi? Drop me a message—I actually read them. Whether it's about the blog, my tools, or something you're building, I'll get back to you." />
            <link rel="canonical" href="https://lyopix.com/contact" />
            <meta property="og:title" content="" />
            <meta property="og:description" content="Got a question, idea, or just want to say hi? Drop me a message—I actually read them. Whether it's about the blog, my tools, or something you're building, I'll get back to you." />
            <meta property="og:url" content="https://lyopix.com/contact" />
            <meta property="og:type" content="website" />
            <meta name="robots" content="index, follow" />
          </Helmet>
          <h1>Message sent!</h1>
          <p>Thanks for reaching out — I'll get back to you soon.</p>
          <button
            className="button"
            style={{ marginTop: "1.5rem" }}
            onClick={() => setStatus("idle")}
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-inner">
        <Helmet>
          <title>Contact | LyOPix Coding</title>
          <meta name="description" content="Got a question, idea, or just want to say hi? Drop me a message—I actually read them. Whether it's about the blog, my tools, or something you're building, I'll get back to you." />
          <link rel="canonical" href="https://lyopix.com/contact" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="Got a question, idea, or just want to say hi? Drop me a message—I actually read them. Whether it's about the blog, my tools, or something you're building, I'll get back to you." />
          <meta property="og:url" content="https://lyopix.com/contact" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>

        {status === "error" && (
          <p className="contact-error" role="alert">{errorMsg}</p>
        )}

        {/* Honeypot — hidden from real users, bots fill it automatically */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === "sending"}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "sending"}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={status === "sending"}
          />

          <button type="submit" className="button" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}