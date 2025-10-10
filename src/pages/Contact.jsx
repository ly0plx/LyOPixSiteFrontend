import { Helmet } from "react-helmet-async";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact | LyOPix Coding</title>
      </Helmet>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form action="">
        <div className="input-group">
          <input type="text" id="name" placeholder=" " />
          <label htmlFor="name">Name:</label>
        </div>
        <div className="input-group">
          <input type="email" id="email" placeholder=" " />
          <label htmlFor="email">Email:</label>
        </div>
        <div className="input-group">
          <textarea name="" id="message" placeholder=" "></textarea>
          <label htmlFor="message">Message:</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
