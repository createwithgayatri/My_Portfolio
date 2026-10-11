import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section id="contact" className="section contact-section">

      <div className="section-heading">

        <p className="eyebrow">08 / CONTACT</p>

        <h2>Let's connect</h2>

        <p>
          Have a product idea, a role, or a problem worth solving?
          I'd love to hear from you.
        </p>

      </div>

      <div className="contact-grid">

        <div className="contact-info">

          <h3>
            Whether you're building a development team or
            shaping your next application, let's start a
            conversation.
          </h3>

          <ContactItem
            icon={<FiMail />}
            title="Email"
            value="gayatribagul46@gmail.com"
          />

          <ContactItem
            icon={<FiPhone />}
            title="Phone"
            value="+91-7774058611"
          />

          <ContactItem
            icon={<FiMapPin />}
            title="Location"
            value="Pune, Maharashtra, India"
          />

          <ContactItem
            icon={<FiLinkedin />}
            title="LinkedIn"
            value="gayatri-bagul-018112391"
          />

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>

          </div>

          <label>Subject</label>

          <input
            type="text"
            placeholder="What can we build?"
            required
          />

          <label>Message</label>

          <textarea
            placeholder="Tell me a little about it..."
            required
          ></textarea>

          <button
            type="submit"
            className="primary-btn submit-btn"
          >
            Send message
            <FiSend />
          </button>

        </form>

      </div>

    </section>
  );
}

function ContactItem({ icon, title, value }) {
  return (
    <div className="contact-item">

      <div className="contact-icon">
        {icon}
      </div>

      <div>
        <span>{title}</span>
        <strong>{value}</strong>
      </div>

    </div>
  );
}

export default Contact;