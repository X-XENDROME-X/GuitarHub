import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 1500);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setError("");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      setError("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <>
      <header>
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Get in Touch with GuitarHub</h1>
            <p>
              Have questions or feedback? Reach out to our team—we’re here to help you on your guitar journey!
            </p>
            <div className="contact-hero-cta">
              <a href="#contact-form" className="btn btn-primary">
                Send a Message
              </a>
            </div>
          </div>
        </section>
      </header>

      <section className="contact-form-section" id="contact-form">
        <div className="contact-section-header">
          <h2>Contact Form</h2>
          <p>
            Fill out the form below to send us your queries, feedback, or support requests.
          </p>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form" id="contactForm">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a Subject
                </option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </section>

      <section className="contact-social">
        <div className="contact-section-header">
          <h2>Connect with Us</h2>
          <p>
            Follow GuitarHub on social media for updates, tips, and community support.
          </p>
        </div>
        <div className="contact-social-icons">
          <a href="#" title="Facebook">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" title="Instagram">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" title="Twitter">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" title="LinkedIn">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" title="YouTube">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </section>

      {showPopup && (
        <div className="popup show" id="successPopup">
          <div className="popup-content">
            <i className="fas fa-check-circle fa-2x"></i>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We’ll get back to you soon!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;