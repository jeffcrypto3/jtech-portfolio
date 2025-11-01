import React, { useState } from "react";
import "./ContactForm.css";

const FORM_ENDPOINT = "https://formspree.io/f/xdkwvjpy";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        <p className="section-sub">
          Have a project or just want to say hi? Send a message below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <input type="text" name="name" placeholder="Your name" required />
          </div>

          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            required
          ></textarea>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <span className="form-note success">
                ✅ Message sent successfully!
              </span>
            )}
            {status === "error" && (
              <span className="form-note error">
                ❌ Something went wrong. Please try again.
              </span>
            )}
          </div>
        </form>

        {/* WhatsApp section */}
        <div className="whatsapp-contact">
          <p>
            Or you can message me on{" "}
            <a
              href="https://wa.me/2349025821068"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
